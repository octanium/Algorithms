// Prims is used to find minimum spanning tree in weighted undirected graph
// 1. Initialise all weight to infinity except the source which will be 0
// 2. Select node with min weight
// 3. Include selected node in set: mst 
// 4. Relax all the adjacent nodes to the recently included node(Update the degree of adj nodes)

// Complexity
// 1. O(2ElogV). Using priority queue. Each time a node is added to set mst, its neighbors are updated in Priority Queue. Update in a priority Q takes logn times
// In priority Queue we store the degree in the min heap, whenever we relax a neighbor and weight is less than the degree of that neighbor, we need to do an update to the min heap
// 2. O(2EV) using arrays + adjList.
//    O(V^2) using arrays + adjMatrix. The implementation done below
// 3. O(E + VlogV) using Fibonacci heap



const prim = (adj, V) => {
    const degree = Array(V).fill(Number.POSITIVE_INFINITY);
    degree[0] = 0;
    const mst = Array(V).fill(false);
    const parent = Array(V).fill(null);
    parent[0] = -1;
    for (let i=0; i<V-1; i++) { // If a graph has V vertices then it's MST has V-1 edges`
        let nodeWithMinDegree = findMin(degree, mst, V); // Pick the node with minimum degree
        mst[nodeWithMinDegree] = true;
        Relax(nodeWithMinDegree, adj, V, parent, degree, mst);
    }
    console.log(degree, parent)
}

const findMin = (degree, mst, V) => {
    let min = Number.POSITIVE_INFINITY;
    let node = -1;
    for (let i=0; i<V; i++) {
        if (mst[i]=== false && degree[i] < min) {
            min = degree[i];
            node = i;
        }
    }
    return node;
}

const Relax = (node, adj, V, parent, degree, mst) => {
    let weight;
    for (let i=0; i<V; i++) {
        weight = adj[node][i];
        if (mst[i]==false && weight !== 0 && weight < degree[i]) {
            degree[i] = weight;
            parent[i] = node;
        }
    }
}


const V=3;
const adJMatrix = [ [ 0, 5, 1 ], [ 5, 0, 3 ], [ 1, 3, 0 ] ];

const V2 = 6;
const adJMatrix2 = [
    [0,4,6,0,0,0],
    [4,0,6,3,4,0],
    [6,6,0,1,0,0],
    [0,3,1,0,2,3],
    [0,4,0,2,0,7],
    [0,0,0,3,7,0]
]
prim(adJMatrix2, V2);