// using Randomised Selection,
// Expected Running time ET(n) = O(n)
// Worst case T(n) = T(n-1)+O(n) => O(n^2)
const Ar =  [9, 31, 28, 18, 27, 8, 21, 39, 6, 49, 13];

const swap = (A, i, j) => {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

const Partition = (A, p, r) => {
    let x = A[r];// Pivot
    let j = p-1;
    for (let i = p; i<=r-1; i++) {
        if (A[i] <= x) {
            j++;
            swap(A, i, j);
            
        }
    }
    swap(A, r, j+1)
    return j+1;
}

let medVal;

// My Algo(Not better than the Actual algorithm because of operating on left subarray from 0 index, resulting in increased partitioning)
// const median = (A, p, r, i) => {
//     if (p==r) console.log('med', A[p]);
//     if(p<r) {
//         let q = Partition(A, p, r);
//         console.log('q:', q,' , i:', i);
//         if (q===i) return console.log('med', A[q]);
//         if (q<i) return median(A, q+1, r, i);
//         return median(A, 0, q-1, i);
//     }
// }

// // Actual Algo
const median = (A, p, r, i) => {
    if (p==r) console.log('med', A[p]); // This case may only occur if after repeated partitioning we still need to search to the left or right subarray, but there is only one element remaining , then that is the answer
    let q = Partition(A, p, r);
    let k = q-p+1;// Size of left subarray including pivot q
    if (k===i) return console.log('med', A[q]);
    else if (i<k) return median(A, p, q-1, i);// no need to manipulate i on selecting left subarray, as i-th smallest element is still the i-th smallest in left subarray
    else return median(A, q+1, r, i-k);
    // i-k, if we select right subarray because now the i(th) smallest element is not ith smallest anymore as we have ignored the left subarray(including pivot)
}

median(Ar, 0, Ar.length-1, Math.floor(Ar.length/2)+1);// +1 because median will be at index 5 from 0, but it is the 6th smallest element, so 5+1




