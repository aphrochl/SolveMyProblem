from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

# Configuration
DATABASE_HOST = os.getenv('POSTGRES_HOST', 'localhost')
DATABASE_NAME = os.getenv('POSTGRES_DB', 'mydatabase')
DATABASE_USER = os.getenv('POSTGRES_USER', 'myuser')
DATABASE_PASSWORD = os.getenv('POSTGRES_PASSWORD', 'mypassword')

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        host=DATABASE_HOST,
        database=DATABASE_NAME,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD
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
    return jsonify({"solution": "Sample solution"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
