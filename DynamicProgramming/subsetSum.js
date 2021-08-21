

// 1. Elements can be taken once only

const subsetSum = (list, target, n) => {
    if (n>=-1) {
        if (target == 0) return true;
        if (target < 0) return false;
        return subsetSum(list, target-list[n], n-1) ||  subsetSum(list, target, n-1);
    }
    return false;
}


// Tabulated
const subsetSumTabulated = (list, target, n) => {
    const dp = Array(n+1).fill(0).map(() => Array(target+1).fill(0));
    for (let i=0; i<=n; i++) dp[i][0] = 1;
    for (let i=1; i<=target; i++) dp[0][i] = 0;
    for (let i=1; i<=n; i++) {
        for (let j=1; j<=target; j++) {
            if ((j-list[i-1]) >=0) dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-list[i-1]]);
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[n][target];
}

// 2. Elements can be taken more than once

// 2.1 recursive
const subsetSum2 = (list, target) => {
    if (target < 0) return false;
    if (target === 0) return true;
    for (let num of list) {
        if (subsetSum2(list, target-num) === true) return true; 
    }
    return false;
}

// 2.2 recursive memoised
const subsetSum2memoised = (list, target, memo={}) => {
    if (target in memo) return memo[target];
    if (target < 0) return false;
    if (target === 0) return true;
    for (let num of list) {
        let result = subsetSum2memoised(list, target-num, memo);
        memo[target] = result;
        if (result === true) return true; 
    }
    return false;
}

// Tabulaion
const subsetSum2tabulated = (list, target) => {
    const dp = Array(target+1).fill(false);
    dp[0] = true;
    for (let i=0; i<=target; i++) {
        for (let num of list) {
            if (dp[i] === true && (i+num) <= target) dp[i+num] = true; // Forward Dynamic Programming, update future values
        }
    }
    console.log(dp);
    return dp[target];
}


const list = [3, 5, 6];
console.log(subsetSum2tabulated(list, 17));