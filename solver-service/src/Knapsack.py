from ortools.algorithms.python import knapsack_solver

def knapsackSolver(description): # Description as JSON
    # Create the solver.
    solver = knapsack_solver.KnapsackSolver( # Call the solver for the Knapsack Problem
        knapsack_solver.SolverType.KNAPSACK_MULTIDIMENSION_BRANCH_AND_BOUND_SOLVER,
        "KnapsackSolver",
    )

    # Import from the JSON
    values = description["values"] # Array
    weights = description["weights"] # Array
    capacities = description["capacities"] # Integer

    solver.init(values, weights, capacities)
    computed_value = solver.solve()

    Solution = ""

    packed_items = []
    packed_weights = []
    total_weight = 0
    Solution += f"Total value = {computed_value}\n"
    for i in range(len(values)):
        if solver.best_solution_contains(i):
            packed_items.append(i)
            packed_weights.append(weights[0][i])
            total_weight += weights[0][i]
    Solution += f"Total weight: {total_weight}\n"
    Solution += f"Packed items: {packed_items}\n"
    Solution += f"Packed_weights: {packed_weights}\n"

    return Solution # Print the log of the process