// Find an element that occurs >= n/2 in sorted array, n=length of array
// complexity O(lgn) using Binary search

const Ar =  [4, 4, 28, 4, 27, 4, 19, 4, 6, 4, 22, 4, 3, 2, 1];
const sorted = Ar.sort((a,b) => a-b);

const bin = (A) => {
    console.log(A);
}
bin(sorted, 0, Ar.length-1, Math.floor(Ar.length/2));




