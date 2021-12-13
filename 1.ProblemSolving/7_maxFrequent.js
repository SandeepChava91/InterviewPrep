
function MaxFrequent(arr, k) {

    let maxMapinputMap = {};
    let result = [];

    let maxMap = [];

    for (let i = 0; i < arr.length; i++) {

        if (inputMap[arr[i]]) {
            inputMap[arr[i]]++;
        }
        else {
            inputMap[arr[i]] = 1;
        }

        if (Object.keys(maxMap).length < k) {
            if (maxMap[arr[i]]) {
                maxMap[arr[i]]++;
            }
            else {
                maxMap[arr[i]] = 1;
            }

            maxMap[arr[i]] = 1;
        }
        else {
            maxMap[Object.keys(maxMap)[k-1]]
        }

    }

    let sorted = Object.keys(inputMap).sort((a, b) => {
        return (inputMap[b] - inputMap[a]) ? inputMap[b] - inputMap[a] : b - a;
    });

    if (Object.keys(inputMap).length < k) {
        k = Object.keys(inputMap).length;
    }

    for (let i = 0; i < k; i++) {
        result.push(parseInt(sorted[i]));
    }

    return result;

}

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3];
const k = 4;

console.log(MaxFrequent(arr, k));

