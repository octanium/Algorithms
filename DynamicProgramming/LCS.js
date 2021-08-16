

const A = 'ansbdnb';
const B = 'asbbn';

const lcs = (i, j) => {
    if (i<0 || j<0) return 0;
    if (A[i] === B[j]) return 1 + lcs(i-1, j-1);
    return Math.max(lcs(i, j-1), lcs(i-1, j));
}
console.log(lcs(A.length-1, B.length-1));