// Kruskal is used to find minimum spanning tree in weighted undirected graph
// Steps
// 1. Sort the edges in increasing order of their weights ElogE and store them in sorted array
// 2. Pick edge one by one from sorted list and check if there is a cycle(logV using Disjoint set) if we include this edge in our mst. for E edges detecting cycle takes ElogV
// 3. If there is cycle then ignore, else include the edge. 
// O(ElogE + ElogV) using DSUF, O(ElogE + E(E+V)) => O(E^2) using DFS, DFS takes E+V, for E edges E(E+V)


const V=6;
const E=10;
const edges = [
    { source: 0, dest: 1, weight: 1 },
    { source: 3, dest: 4, weight: 2 },
    { source: 1, dest: 2, weight: 3 },
    { source: 1, dest: 3, weight: 1 },
    { source: 2, dest: 4, weight: 1 },
    { source: 0, dest: 2, weight: 2 },
    { source: 2, dest: 3, weight: 2 },
    { source: 3, dest: 5, weight: 4 },
    { source: 1, dest: 4, weight: 3 },
    { source: 4, dest: 5, weight: 3 },
];
let parent = Array(V).fill(-1);
const rank = Array(V).fill(0);
const selected = [];

//Step-1 Sort Edges based on weight
edges.sort((a,b) => { return a.weight < b.weight ? -1 : 1 }); // E.log(E)
//Step-2 Include edge one by one and check if there is a cycle

const union = (u, v) => { // Union by rank-log(V)
    const parent1 = findSet(u);
    const parent2 = findSet(v);
    const rank1 = rank[parent1];
    const rank2 = rank[parent2];
    if (rank1 === rank2) {
        parent[parent1] = parent2;
        rank[parent2]++;
    } else if (rank1 > rank2) {
        parent[parent2] = parent1;
    } else if (rank1 < rank2) {
        parent[parent1] = parent2;
    }
}

const findSet = (v) => {
    if(parent[v] === -1) return v;
    return findSet(parent[v]);
}

for (var edge of edges) {
    const parent1 = findSet(edge.source);
    const parent2 = findSet(edge.dest);
    if (parent1 !== -1 && parent2 !== -1 && parent1 === parent2) continue; // Cycle detected hence skip the edge
    selected.push(edge);
    union(edge.source, edge.dest);
}

console.log('MST: ', selected);





