
const cycle = (V, adj) => {
    let visited = Array(V).fill(false);
    for (let i=0; i<V; i++) {
        if (!visited[i]) {
            if(BFS(i, adj, visited)) return true;
        }
    }
    return false;
}

const BFS = (node, adj, visited) => {
    visited[node] = true;
    const Q = [{ item: node, parent: null }];
    while(Q.length > 0) {
        const popped = Q.shift();
        for (let v of adj[popped.item]) {
            if(!visited[v]) {
                visited[v] = true;
                Q.push({ item: v, parent: popped.item });
            }
            else if (v !== popped.parent) return true
        }
    }
}

const V = 10;


const adj = [
    [1],
    [0,3],
    [4],
    [1],
    [2,9,5],
    [4,6],
    [5,7],
    [6,8,10],
    [9,7],
    [4,8],
    [7]
]

console.log(cycle(V, adj));