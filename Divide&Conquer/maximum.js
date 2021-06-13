// Find the highiest element using D&Q O(n);
// Strategy: Use Randomized_Select and check if Pivot is A.length-1, like we do to find median

const Ar =  [9, 31, 28, 18, 27, 4, 19, 39, 6, 49, 22, 5, 7];

const swap = (A, i, j) => {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

const Partition = (A, p, r) => {
    let x = A[r];// Pivot
    let i = p-1;
    for(let j=p; j<=r-1; j++) {
        if (A[j] < x) {
            i++;
            swap(A, i, j);
        }
    }
    swap(A, i+1, r);
    return i+1;
}

const Randomized_Select = (A, p, r) => {
    if (p<=r) {
        let q = Partition(A, p, r);
        if (q==r) return console.log('Highest Element:', A[q]);
        Randomized_Select(A, q+1, r);
    }
}

Randomized_Select(Ar, 0, Ar.length-1);