function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    A.sort((a, b) => b - a);


    let inputMap = {};

    for (let i = 0; i < A.length; i++) {
        if (inputMap[A[i]]) {
            inputMap[A[i]]++;
        }
        else {
            if (CheckMap(inputMap)) {
                return CheckMap(inputMap);
            }
            inputMap[A[i]] = 1;
        }
    }

    if (CheckMap(inputMap)) {
        return CheckMap(inputMap);
    }

    return 0;

}


function CheckMap(inputMap) {
    for (const key in inputMap) {
        const element = inputMap[key];

        if (key == element) {
            return element;
        }
    }

    return 0;
}

let input = [5, 5, 5, 5, 5];
console.log(solution(input));

input = [3, 8, 2, 3, 3, 2];
console.log(solution(input));


input = [3, 1, 4, 1, 5];
console.log(solution(input));

