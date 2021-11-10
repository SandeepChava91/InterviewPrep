function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let inputSum = breakAndAdd(N);
    let requiredNum = inputSum * 2;

    let breakSum;

    for (let i = N + 1; i < Infinity; i++) {
        breakSum = breakAndAdd(i);
        if(breakSum === requiredNum){
            return i;
        }
    }
}

function breakAndAdd(num) {
    let nums = num.toString().split("");

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + parseInt(nums[i]);
    }

    return sum;
}

console.log(solution(99));
