

const rod = (list, val, length) => {
    if (length <= 0) return 0;
    let result = 0;
    for (let i=0; i <list.length; i++) {
        if (list[i] <= length) result = Math.max(result, val[i] + rod(list, val, length-list[i]));
    }
    return result;
}

const rodmemo = (list, val, length, memo={}) => {
    if (length in memo) return memo[length];
    if (length <= 0) return 0;
    let result = 0;
    for (let i=0; i <list.length; i++) {
        if (list[i] <= length) {
            result = Math.max(result, val[i] + rodmemo(list, val, length-list[i], memo));
        }
    }
    memo[length] = result;
    return result;
}

const rodtabulated = (list, val, length) => {
    const dp = Array(length+1).fill(0);
    for (let i=1; i<=length; i++) {
        let result = 0;
        for (let j=0; j<list.length; j++) {
            const item = list[j];
            const value = val[j];
            if (item <= i) {
                result = Math.max(result, value + dp[i-item]);
            }
        }
        dp[i] = result;
    }
    // console.log(dp);
    return dp[length];
}

const A = [1, 2, 3, 4, 5, 6, 7, 8];
const B = [3,   5,   8,   9,  10,  17,  17,  20];
const length = 8;
console.log(rodtabulated(A, B, length));