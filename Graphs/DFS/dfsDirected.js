



const DFS = (V, adj) => {
    let visited = Array(V).fill(false);
    for (let i=0; i<V; i++) {
        if (!visited[i]) {
            DFS_VISIT(i, adj, visited);
        }
    }
    return visited;
}

const DFS_VISIT = (node, adj, visited) => {
    visited[node] = true;
    for (v of adj[node]) {
        if (!visited[v]) {
            DFS_VISIT(v, adj, visited);
        }
    }
}

// const DFS_VISIT2 = (node, adj) => {// To know all parents or tree edges
//     let parents = {};
//     for (v of adj[node]) {
//         if (!(v in parent)) {
//             parent[v] = [node];
//             DFS_VISIT(v, adj);
//         }
//         else parent[v].push(node)
//     }
// }
//Directed graph example = (0,2), (1,5), (2,5), (2,4), (2,8), (3,8), (4,6), (4,7)
const V = 9;
const adj = [ // Adjacency list of a directed graph
    [2],
    [5],
    [4,5,8],
    [8],
    [6,7],
    [],
    [],
    [],
    []
];
DFS(V, adj)
console.log(DFS(V, adj));