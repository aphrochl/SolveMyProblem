# Base Idea:

Problems will be based on these categories:
1. [Linear optimization](./LinearOptimization.py)
2. Constraint optimization
3. Mixed-integer optimization
4. Assignment
5. Scheduling
6. Packing
7. Routing
8. Network flows

Each Category will be accessed by a *seperate* Python script.

The main script will be the [index.py](./index.py) which will:
- Get the data from the database (preferably a JSON in string format)
- Format string into JSON
- Depending on the type of problem call on the appropriate script and execute it
- Return the results

## Linear Optimization

Data format should be something like [this](./data.json)

The Solver will return a __log__ of the process with the result in __string format__.