const items = ['ab', 'abc', 'cd', 'def', 'abcd'];

// Solution 1
const canConstruct = (target, list, computed) => {
    if (computed.length > target.length) return false;
    if (computed === target) return true;

    for (let str of list) {
        let result = canConstruct(target, items, computed + str);
        if (result === true) return true;
    }
    return false;
}

// Solution 2
const canConstruct2 = (list, target) => {
    if (target === '') return true;
    for (let str of list) {
        let result;
        if (target.indexOf(str) === 0) result = canConstruct2(list, target.slice(str.length));
        if(result === true) { return true; }
    }
    return false
}

// Memoised
const canConstructMemoised = (list, target, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;
    for (let str of list) {
        let result;
        if (target.indexOf(str) === 0) result = canConstructMemoised(list, target.slice(str.length), memo);
        memo[target] = result;
        if(result === true) { return true; }
    }
    return false
}

// Tabulated
const canConstructTabulated = (list, target) => {
    const dp  = Array(target.length+1).fill(0);
    dp[0] = 1;
    for (let i=0; i<=target.length; i++) {
        if (dp[i] === 1) {
            for (let str of list) {
                if (target.indexOf(str) === i) {
                    dp[i+str.length] = 1;
                }
            }
        }
    }
    return dp[target.length] === 1 ? 'Yes' : 'No'
}

console.log(canConstructTabulated(items, 'cdabcddefg'));