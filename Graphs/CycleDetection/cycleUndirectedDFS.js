
const cycle = (V, adj) => {
    let visited = Array(V).fill(false);
    for (let i=0; i<V; i++) {
        if (!visited[i]) {
            if(DFS_VISIT(i, adj, visited, null)) return true;
        }
    }
    return false;
}

const DFS_VISIT = (node, adj, visited, parent) => {
    visited[node] = true;
    for (v of adj[node]) {
        if (!visited[v]) {
            if (DFS_VISIT(v, adj, visited, node)) return true;
        }
        else if (v!==parent) return true;
    }
}
const V = 5;

const adj2 = [
    [1],
    [0,2,3],
    [1,3],
    [1,2,4],
    [3]
]

console.log(cycle(V, adj2));