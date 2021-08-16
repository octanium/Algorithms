
// Brute force Recursive
const gridTraveller = (m, n) => {
    if (m < 1 || n < 1) return 0;
    if (m==1 && n==1) return 1;
    return gridTraveller(m-1,n) + gridTraveller(m, n-1);
}
//Memoised
const gridTravellerMemoised = (m, n, memo={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m==1 && n==1) return 1;
    if (m < 1 || n < 1) return 0;
    memo[key] = gridTravellerMemoised(m-1,n, memo) + gridTravellerMemoised(m, n-1, memo);
    return memo[key];
}

const gridTravellerTabulation = (m, n) => {
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for (let i=1;i<=m; i++) {
        for (j =1; j<=n; j++) {
            if (i==1 && j==1) dp[i][j] = 1;
            else dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m][n];
}

console.log(gridTravellerTabulation(18,18));
