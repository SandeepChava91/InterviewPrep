
function SelectionSort(arr) {
    let minPosition;

    for (let i = 0; i < arr.length; i++) {

        minPosition = i;

        for (let j = i+1; j < arr.length; j++) {
    
            if (arr[minPosition] > arr[j]) {
                minPosition = j;
            }
        }

        // Swap
        let temp = arr[i];
        arr[i] = arr[minPosition];
        arr[minPosition] = temp; 
    }

    return arr;
}

const input = [2, 1, 6, 4, 9, 10, 8];
const output = SelectionSort(input);

console.log(output);