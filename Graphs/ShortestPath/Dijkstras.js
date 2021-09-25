// In a graph find the shortest path from a source node to all other nodes
// Doesn't works for negative weighted cycle
// General Intution, say there are 3 nodes a,b,c, distance-(a,b) = 5, distance-(a,c) = 14, distance-(b,c) = 4, if we see minimum distance from a to c, it's via b,
// So when we are on node b, we check if we include the edge (b,c) and add it to the distance we already calcualted from a, and compare that distance with the distance c knows from a. then we can decide whether to include the edge or not.
// O(V^2) below implementation. O(ElogV) using min heap



const dijkstra = (adj, V) => {
    const degree = Array(V).fill(Number.POSITIVE_INFINITY);
    degree[0] = 0;
    const parent = Array(V).fill(null);
    parent[0] = -1;
    const set = Array(V).fill(false);
    for (var i=0; i<V-1; i++) {
        const minDegree = findMinDegree(set, degree);
        set[i] = true;
        Relax(minDegree, adj, V, degree, set, parent);
    }
    console.log(set);
    console.log(degree);
    console.log(parent);
}

const findMinDegree = (set, degree) => {
    let min = Number.POSITIVE_INFINITY;
    let vertex;
    for (let i=0; i<degree.length; i++){
        if (set[i] === false && degree[i] < min) {
            min = degree[i];
            vertex = i;
        }
    }
    return vertex;
}

const Relax = (node, adj, V, degree, set, parent) => {
    for (let i=0; i<V; i++) {
        let weight = adj[node][i];
        if (weight !==0 && set[i] === false && (weight + degree[node]) < degree[i]) {
            degree[i] = weight + degree[node];
            parent[i] = node;
        }
    }

}

const V = 6;

const adjMatrix = [
    [0,1,4,0,0,0],
    [1,0,4,2,7,0],
    [4,4,0,3,5,0],
    [0,2,3,0,4,6],
    [0,7,5,4,0,7],
    [0,0,0,6,7,0]
]

dijkstra(adjMatrix, V)