// Find an element that occurs >= n/2 in unsorted array, n=length of array
// complexity O(n) + O(n/2) = O(n)

const Ar =  [4, 4, 28, 4, 27, 4, 19, 4, 6, 4, 22, 4, 88];
const sorted = Ar.sort((a,b) => a-b);

const swap = (A, i, j) => {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

const Partition = (A, p, r) => {
    let x = A[r];// Pivot
    let j = p-1;
    for (let i = 0; i<=r-1; i++) {
        if (A[i] <= x) {
            j++;
            swap(A, i, j);
            
        }
    }
    swap(A, r, j+1)
    return j+1;
}

let medVal;
let occurence = 0;

const median = (A, p, r, i) => {
    if(p<r) {
        let q = Partition(A, p, r);
        if (q===i) {
            medVal = A[i];
            for (let k=q; k >=0; k--) {// O(n/2)
                if (A[k] === medVal) occurence++;
            }
            if (occurence === Math.floor(A.length/2)+1) console.log(`Element ${medVal} occurs more than n/2`);
            else console.log('No such element found');
        }
        // Ignoring one subproblem out of two, hence making it O(n)
        // If q < i means the median lies between q+1 and r else median lies between p and q-1
        if (q<i) return median(A, q+1, r, i);
        return median(A, p, q-1, i);
    }
}
median(Ar, 0, Ar.length-1, Math.floor(Ar.length/2));




