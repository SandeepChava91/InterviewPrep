function maxSubarrayValue(arr) {
    // Write your code here

    let subArrays = [];
    let subArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            for (let k = i; k <= j; k++) {
                subArray.push(arr[k]);
            }

            subArrays.push(subArray);
            subArray = [];
        }
    }

    // console.log(subArrays);

    let max = Number.MIN_VALUE;
    for (let i = 0; i < subArrays.length; i++) {
        let localMax = maxSubArrayUtil(subArrays[i]);

        if (localMax > max) {
            max = localMax;
        }
    }

    return max;
}

function maxSubArrayUtil(arr) {

    let evenSum = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
        evenSum += arr[i];
    }

    let oddSum = 0;
    for (let i = 1; i < arr.length; i = i + 2) {
        oddSum += arr[i];
    }

    return (evenSum - oddSum) ** 2;
}

// const input = [1, -1, 1, -1, 1];
const input = [3, -1, -1, -1, 5, 1];

console.log(maxSubarrayValue(input));