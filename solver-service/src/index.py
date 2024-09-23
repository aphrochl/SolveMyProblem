from flask import Flask, jsonify, request
from dotenv import load_dotenv
import psycopg2
import os
import json
from SolverService import solver

app = Flask(__name__)

load_dotenv()

# Configuration
DATABASE_HOST = os.getenv('POSTGRES_HOST')
DATABASE_NAME = os.getenv('POSTGRES_DB')
DATABASE_USER = os.getenv('POSTGRES_USER')
DATABASE_PASSWORD = os.getenv('POSTGRES_PASSWORD')
DATABASE_PORT = os.getenv('POSTGRES_PORT')

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        host=DATABASE_HOST,
        database=DATABASE_NAME,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        port=DATABASE_PORT
    )
    return conn

@app.route('/test-db', methods=['GET'])
def test_db():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT NOW()')
        result = cur.fetchone()
        cur.close()
        conn.close()
        return jsonify({'time': result[0]})
    except Exception as e:
        # Log the exception or handle it as needed
        return str(e), 500

@app.route('/solve', methods=['GET'])
def solve():
    # Get the problem ID from query parameters
    problem_id = request.args.get('problem_id')

    if not problem_id:
        return jsonify({"error": "Please provide a valid problem_id as a query parameter"}), 400

    try:
        # Connect to the database
        conn = get_db_connection()
        cur = conn.cursor()

        # Fetch the 'model' and 'description' from the 'problems' table for the given problem_id
        cur.execute('SELECT description FROM problems WHERE id = %s', (problem_id,))
        problem = cur.fetchone()

        if problem is None:
            return jsonify({"error": f"No problem found with id {problem_id}"}), 404

        details = json.loads(problem[0])  # Unpack the fetched result
        model = details['model']
        description = details['description']

        # Call the solver function with the model and description
        solution = solver(model, description)

        # Close the database connection
        cur.close()
        conn.close()

        # Return the solution as JSON
        return jsonify({"solution": solution})

    except Exception as e:
        # Log the error or handle it as needed
        return str(e), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
