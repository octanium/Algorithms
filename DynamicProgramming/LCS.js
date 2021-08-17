

const A = 'ansbdnb';
const B = 'asbbn';

const lcs = (i, j) => {
    if (i<0 || j<0) return 0;
    if (A[i] === B[j]) return 1 + lcs(i-1, j-1);
    return Math.max(lcs(i, j-1), lcs(i-1, j));
}

const lcstabulated = (n1, n2) => {
    const dp = Array(n1+1).fill(0).map(() => Array(n2+1).fill(0));
    for (let i=1; i<=n1; i++) {
        for (let j=1; j<=n2; j++) {
            if (A[i] === B[j]) dp[i][j] = 1+dp[i-1][j-1];
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[n1][n2];
}
console.log(lcstabulated(A.length, B.length));