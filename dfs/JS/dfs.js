function dfs(graph, current_node, visited, path, allPaths) {
    visited.add(current_node);
    path.push(current_node);
  
    if (graph.nodes.length === visited.size) {
      allPaths.push(path.join(" -> "));

    }

    
  
    for (let edge of graph.edges) {
      if (edge.from === current_node && !visited.has(edge.to)) {
        dfs(graph, edge.to, visited, path, allPaths);
      }
    }
  
    visited.delete(current_node);
    path.pop();
  }
  
  // Graph JSON
  const graphJson = {
    graph: {
      nodes: [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" },
        { name: "E" },
        { name: "F" },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "A", to: "C" },
        { from: "B", to: "D" },
        { from: "B", to: "E" },
        { from: "C", to: "D" },
        { from: "C", to: "E" },
        { from: "D", to: "F" },
        { from: "E", to: "F" },
      ],
    },
    start_node: { name: "A" },
  };
  
  // Initialize variables
  const startNode = graphJson.start_node.name;
  const visited = new Set();
  const path = [];
  const allPaths = [];
  
  // Perform DFS
  dfs(graphJson.graph, startNode, visited, path, allPaths);
  
  // Print all paths
  console.log(allPaths);
  