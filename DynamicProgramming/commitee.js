
// form commitee of k members using n people.

const commitee = (n, k) => {
    if (n<0) return 0;
    if (k==0) return 1;
    return commitee(n-1, k) + commitee(n-1, k-1);
}

console.log(commitee(10, 3));