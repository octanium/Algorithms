function bfsOfGraph(V, adj)
    {
        let Q = [0];
        let visited = {'0':true};
        for (let i=1; i<V; i++) visited[i] = false;
        const result = [];
        while(Q.length !== 0) {
            const node = Q.shift();
            result.push(node);
            for (let n of adj[node]) {
                if (!visited[n]) {
                    visited[n] = true;
                    Q.push(n)
                }
            }
        }
        return result;
    }

    //Directed graph example = (0,2), (1,5), (2,5), (2,4), (2,8), (3,8), (4,6), (4,7)
    const V = 9;
    const adj = [ // Adjacency list
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

    // Expected output = [ '0', '2', '4', '5', '6', '7', '8' ]
    console.log(bfsOfGraph(V, adj));
