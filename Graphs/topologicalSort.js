
// Linear ordering of vertices such that for an edge(u,v) u appears before v

const cycle = (V, adj) => {
    let visited = Array(V).fill(false);
    let stack = [];
    for (let i=0; i<V; i++) {
        if (!visited[i]) {
            DFS_VISIT(i, adj, visited, stack);
        }
    }
    return stack.reverse();
}

const DFS_VISIT = (node, adj, visited, stack) => {
    visited[node] = true;
    for (v of adj[node]) {
        if (!visited[v]) {
            DFS_VISIT(v, adj, visited, stack);
        }
    }
    stack.push(node);// Inserting element according to finish time.
}
const V = 9;
const adj = [ // Adjacency list of a directed graph
    [2],
    [5],
    [4,5,8],
    [8],
    [6,7],
    [4],
    [],
    [1],
    []
];


console.log(cycle(V, adj));