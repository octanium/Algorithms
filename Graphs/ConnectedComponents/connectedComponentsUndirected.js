
    // For Undirected graph, connected components are the number of times a DFS is called.
    // There is a convention that connected components are for undirected and stronglyconnectedcomponents are for directed
    const DFS = (V, adj) => {
        let visited = Array(V).fill(false);
        let c = 0;
        for (let i=0; i<V; i++) {// If an undirected graph has only one component, there is no need of this loop, simply pick a source 
            if (!(visited[i])) {
                c++;
                DFS_VISIT(i, adj, visited);
            }
        }
        return c;
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
    const adj = [ // Adjacency list of a undirected graph
        [1,3],
        [0,2,3],
        [1,3],
        [0,1,4],
        [3],
        [6],
        [5],
        [],
    ];
    const connectedComponents = DFS(V, adj)
    console.log(connectedComponents);