import json

def dfs(graph, start_node, visited, path, paths):
    visited.add(start_node)  # Mark the current node as visited
    path.append(start_node)  # Add the current node to the current path
    # print("before append")
    # print(path)
    if len(graph[start_node]) == 0:  # Check if it's a leaf node
        paths.append(path.copy())  # Append the current path to the list of paths

    for neighbor in graph[start_node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited, path, paths)  # Recursively call dfs on unvisited neighbor
    print("Before Popping path")
    print(path)
    path.pop()  # Remove the current node from the current path
    print("After Popping path")
    print(path)
    visited.remove(start_node)  # Unmark the current node as visited

# Read the graph from a JSON file
with open("../graph.json", "r") as file:
    data = json.load(file)

# Extract the graph data
graph_data = data["graph"]
start_node = data["start_node"]["name"]

# Convert graph in adjacency list format
graph = {}
for node in graph_data["nodes"]:
    graph.update({node["name"]: []})
for edge in graph_data["edges"]:
    graph[edge["from"]].append(edge["to"])

# print(graph)
# Perform DFS traversal
visited = set()
path = []
paths = []



dfs(graph, start_node, visited, path, paths)

# Print all possible paths
for path in paths:
   print("Path:", "->".join(path))
