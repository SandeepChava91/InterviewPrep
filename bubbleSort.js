
function Swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                // Swap
                Swap(arr, j, j + 1)
            }
        }
    }

    return arr;
}

const input = [2, 1, 6, 4, 9, 10, 8];
const output = BubbleSort(input);

console.log(output);