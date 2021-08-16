// knapsack Brute force Recursive
const knapsack = (C, w, b, n) => {// Complexity 2^n
    if (n>=0) {
        if (C<0) return 0;
        if (w[n] > C) return knapsack(C, w, b, n-1); // don't include if currents weight is more than capacity, instead traverse the right subtree 
        return Math.max(b[n] + knapsack(C-w[n], w, b, n-1), knapsack(C, w, b, n-1));
    }
    return 0;
}
const C=10;
const w = [4,6,5,2];
const b = [5,3,9,6];
console.log(knapsack(C, w, b, w.length-1));

//--------------------------------------------------------
// knapsack Tabulation
knapSack(W, wt, val, n)
    { 
        const dp = Array(n+1).fill(0).map(() => Array(W+1).fill(0));
        for (let i=1; i<=n; i++) {
            for (let j=1; j<=W; j++) {
                if (wt[i-1] > j) dp[i][j] = dp[i-1][j];
                else dp[i][j] =  Math.max(dp[i-1][j], val[i-1] + dp[i-1][j-wt[i-1]]);

            }
        }
        return dp[n][W];
    }