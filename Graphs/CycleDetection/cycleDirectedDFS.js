


const cycle = (V, adj) => {
    let visited = Array(V).fill(false);
    let stack = Array(V).fill(false);
    for (let i=0; i<V; i++) {
        if (!visited[i]) {
            if(DFS_VISIT(i, adj, visited, stack)) return true;
        }
    }
    return false;
}

const DFS_VISIT = (node, adj, visited, stack) => {
    visited[node] = true;
    stack[node] = true; // push to stack
    for (v of adj[node]) {
        if (!visited[v]) {
            if (DFS_VISIT(v, adj, visited, stack)) return true;
        }
        else if (stack[v]) return true; // check in stack if it is already there
    }
    stack[node] = false; // pop from stack
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

const adj2 = [
    [1],
    [0],
]

console.log(cycle(V, adj2));