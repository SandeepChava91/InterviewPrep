function FindPair(arr, target) {

    let result = []

    let mid = arr.length/2;

    for (let i = 0; i < arr.length; i++) {

        // console.log(target & (arr[i]^arr[i-1]));

        for (let j = arr.length - 1; j > i; j--) {

            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
                break;
            }
        }
    }

    return result;

}



// const input_arr = [0, 1, 3, 5, 6, 7, 9, 10, 11, 20, 21, 30, 50];
// console.log(FindPair(input_arr, 29));

const input_arr = [0, 1, 3, 4, 5];
console.log(FindPair(input_arr, 4));