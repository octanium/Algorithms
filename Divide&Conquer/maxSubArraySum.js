const generator = require('random-array-generator');
let myArr = [];
const array =  myArr.length ? myArr : generator.randomArray({min: -10, max: 5, elements: 10});
console.log(array);


// Brute-force solution O(n^2) // Preventing recomputation of sum
const max = (a) => {
    for (let index = 0; index < a.length; index++) {
        newSum=0;
        for (j=index; j<a.length; j++) {
            newSum = newSum + a[j];
            if (sum < newSum) {
                beg = index;
                end = j;
                sum = newSum;
                // console.log('hii..', sum, beg, end, index, j);
            }
        }
    }
};


// Divide and Conquer Solution O(nlog(n))
const maxSubArray = (A, p, r) => {
    if (p===r) {
        console.log('p===r', p, r)
        return A[p];
    }
    else {
        let q = Math.floor((p+r)/2);
        console.log('--------------------------------------');
        console.log('MaxSubArray called', 'p=', p, 'q=',  q, 'r=', r);
        let LeftMaximum = maxSubArray(A, p, q);
        console.log('$$-LeftMaximum: ', LeftMaximum);
        let RightMaximum = maxSubArray(A, q+1, r);
        console.log('$$-RightMaximum', RightMaximum);
        let { leftIndex, rightIndex, CrossingSubArrayMaximum} = CrossingSubArray(A, p, q, r) || 0;
        console.log('$$-CrossingSubArrayMaximum', CrossingSubArrayMaximum);
        console.log('Return value ', Math.max(LeftMaximum, RightMaximum, CrossingSubArrayMaximum));
        console.log('--------------------------------------');
        return Math.max(LeftMaximum, RightMaximum, CrossingSubArrayMaximum);
    }
}
CrossingSubArray = (A, p, q, r) => {
    console.log('CrossingSubArray called', 'p=', p, 'q=',  q, 'r=', r,);
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let leftIndex = -1;
    let rightIndex = -1;
    let sum =0;
    for (let i=p; i<=q; i++) { sum = sum + A[i]; if (sum > leftSum) { leftSum = sum; leftIndex = i; } }
    sum =0;
    for (let i=q+1; i<=r; i++) { sum = sum + A[i]; if (sum > rightSum) { rightSum = sum; rightIndex = i } }
    console.log('leftSum', leftSum, 'rightSum', rightSum);
    return { leftIndex, rightIndex, sum: leftSum+rightSum };
};

console.log(maxSubArray(array, 0, array.length-1));


// Kardens solution O(n)
sum = 0;
maxSum = -Infinity;
for (let i=0; i<array.length; i++) {
    sum = sum +array[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) sum = 0;
}

console.log(maxSum);