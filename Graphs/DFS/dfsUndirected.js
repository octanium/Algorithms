
    const DFS = (V, adj) => {
        let visited = Array(V).fill(false);
        for (let i=0; i<V; i++) {
            if (!(visited[i])) {
                DFS_VISIT(i, adj, visited);
            }
        }
        return visited;
    }
    
    const DFS_VISIT = (node, adj, visited) => {
        visited[node] = true;
        for (v of adj[node]) {
            if (!(visited[v])) {
                DFS_VISIT(v, adj, visited);
            }
        }
    }

    const V = 8;
    const adj = [ // Adjacency list of a directed graph
        [1,3],
        [0,2,3],
        [1,3],
        [0,1,4],
        [3],
        [6],
        [5],
        [],
    ];
    const op = DFS(V, adj)
    console.log(op);