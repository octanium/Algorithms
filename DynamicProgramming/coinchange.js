

// Order matters
const count = (S,m,n) => {
    if (n<0) return 0;
    if(n===0) return 1;
    let sum = 0;
    for (let num of S) {
        sum = sum + count(S, m, n-num);
    }
    return sum;
}
console.log(count([1,2,3], 3, 4)); // 7 
// [1, 1, 1, 1]
// [1, 2, 1]
// [1, 1, 2]
// [2, 1, 1]
// [1, 3]
// [3, 1]
// [2, 2]

// Order does not matters i.e the subset elements should not be repeated
// In above implementation [1, 2, 1] is repeated as [1,1,2] and [2,1,1], similarly for 3,1
// If order is not rquired then answer is 4 subsets
// [1,1,1,1], [1,1,2], [1,3], [2,2]
// Solution, 
// 1. Either take an element or don't
// 2. If you are taking an element then keep on taking the element, this way you can move sequentially, like 1,1,1,2 instead of other subsets like 1,2,1,1
// This forms the basis of mathematical combination where order does not matters and the subsets are less as compared to permutations

const countcoin = (S, n, i=0) => {
    if (n<0 || i===S.length) return 0;
    if(n===0) return 1;
    return countcoin(S, n-S[i], i) + countcoin(S, n, i+1);
}
console.log(countcoin([1,2,3], 4)); // 4

// Tabulated solution
const countDp = (S, sum) => {
    const dp = Array(S.length+1).fill(0).map(() => Array(sum+1).fill(0));
    for (let i=0; i<=S.length; i++) dp[i][0] = 1;
    for (let i=1; i<=S.length; i++) {
        for(let j=1; j<=sum; j++) {
            if (j-S[i-1] >=0) dp[i][j] = dp[i][j-S[i-1]] + dp[i-1][j];
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[S.length][sum];
}
console.log(countDp([1,2,3], 4)); // 4

