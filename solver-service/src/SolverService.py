from LinearOptimization import linearSolver
from Knapsack import knapsackSolver
from MultipleKnapsacks import multipleKnapsackSolver

def solver(model, description):
    if model == "LinearSolver":
        print("LinearSolver")
        return linearSolver(description)
    elif model == "KnapsackSolver":
        print("KnapsackSolver")
        return knapsackSolver(description)
    elif model == "MultipleKnapsackSolver":
        print("MultipleKnapsackSolver")
        return multipleKnapsackSolver(description)
    return {
        "SolutionLog" : "null",
        "SolutionData" : "null",
    }
