
// Recursive
const lis = (list, n, prev = Number.NEGATIVE_INFINITY) => {
    if (n<0) return 0;
    let left = 0;
    let right = 0;
    if (list[n] > prev) left = 1+lis(list, n-1, list[n]);
    right = lis(list, n-1, prev);
    return Math.max(left, right);
}
const A = [1,5,3,1,2, 4, 7];
console.log(lis(A.reverse(), A.length-1));

// Memoised
const lismem = (list, n, prev = Number.NEGATIVE_INFINITY, memo={}) => {
    const key = n + ',' + prev;
    if (key in memo) return memo[key]
    if (n<0) return 0;
    let left = 0;
    let right = 0;
    if (list[n] > prev) left = 1+lismem(list, n-1, list[n], memo);
    right = lismem(list, n-1, prev, memo);
    memo[key] = Math.max(left, right);
    return Math.max(left, right);
}
const B = [2,1,5,3,7];
console.log(lis(B.reverse(), B.length-1));

// Tabulated
// Notice the two paramaters changing in recursive solution are n and prev.
// Prev is nothing but one of the element in list, this means we have to create dp with number of columns = prev(which should be maximum)
// In such cases where nxm table is drawn and n and m has the same elements, we can use 2 pointers, i.e when subproblem(x, y) has x and y belonging to same set we can use 2 pointers
// 2pointers + 1D array(to store results)
// const lisdp = (list, n) => {
//     const dp = Array(n+1).fill(Number.NEGATIVE_INFINITY);
//     dp[0] = 1;
//     console.log(dp);
// }
// console.log(lisdp(A.reverse(), A.length));
