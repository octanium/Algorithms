const Ar =  [9, 31, 28, 18, 27, 4, 19, 39, 6, 49, 22, 5, 7];
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

const median = (A, p, r, i) => {
    if(p<r) {
        let q = Partition(A, p, r);
        if (q===i) medVal = A[i];
        median(A, p, q-1, i);
        median(A, q+1, r, i);
    }
}
median(Ar, 0, Ar.length-1, Math.floor(Ar.length/2));
console.log('med', medVal);




