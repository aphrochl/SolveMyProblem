"""Solves a multiple knapsack problem using the CP-SAT solver."""
from ortools.sat.python import cp_model

def multipleKnapsackSolver(description):
    data = {}
    data["weights"] = description["weights"]
    data["values"] = description["values"]
    assert len(data["weights"]) == len(data["values"])
    num_items = len(data["weights"])
    all_items = range(num_items)

    data["bin_capacities"] = description["bin_capacities"]
    num_bins = len(data["bin_capacities"])
    all_bins = range(num_bins)

    model = cp_model.CpModel()

    # Variables.
    # x[i, b] = 1 if item i is packed in bin b.
    x = {}
    for i in all_items:
        for b in all_bins:
            x[i, b] = model.new_bool_var(f"x_{i}_{b}")

    # Constraints.
    # Each item is assigned to at most one bin.
    for i in all_items:
        model.add_at_most_one(x[i, b] for b in all_bins)

    # The amount packed in each bin cannot exceed its capacity.
    for b in all_bins:
        model.add(
            sum(x[i, b] * data["weights"][i] for i in all_items)
            <= data["bin_capacities"][b]
        )

    # Objective.
    # maximize total value of packed items.
    objective = []
    for i in all_items:
        for b in all_bins:
            objective.append(cp_model.LinearExpr.term(x[i, b], data["values"][i]))
    model.maximize(cp_model.LinearExpr.sum(objective))

    solver = cp_model.CpSolver()
    status = solver.solve(model)

    Solution = ""

    if status == cp_model.OPTIMAL:
        Solution += f"Total packed value: {solver.objective_value}\n"
        total_weight = 0
        for b in all_bins:
            Solution += f"Bin {b}\n"
            bin_weight = 0
            bin_value = 0
            for i in all_items:
                if solver.value(x[i, b]) > 0:
                    Solution += f'Item:{i} weight:{data["weights"][i]} value:{data["values"][i]}\n'
                    bin_weight += data["weights"][i]
                    bin_value += data["values"][i]
            Solution += f"Packed bin weight: {bin_weight}\n"
            Solution += f"Packed bin value: {bin_value}\n\n"
            total_weight += bin_weight
        Solution += f"Total packed weight: {total_weight}\n"
    else:
        Solution += "The problem does not have an optimal solution.\n"

    return Solution