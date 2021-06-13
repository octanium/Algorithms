const num = 125;

//Bruteforce Approach complexity-  O(cuberoot(n))
let i;
for (i=1; i*i*i< num; i++);
console.log(i)

// Optimised Approach using Binary search, complexity- O(lg(n))

i=null;
const cuberoot = (n, start, end) => {
    let mid = Math.floor((start+end)/2);
    let cube = mid*mid*mid;
    if (cube === n) { i = mid; return; }
    if (cube > n) {
        console.log('cube > n', mid);
        return cuberoot(n, start, mid);
    }
    else {
        console.log('cube < n', mid);
        return cuberoot(n, mid, end );
    }


}
cuberoot(num, 1, num);
console.log(i)
