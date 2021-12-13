/*

    [
        1 0 1 0 0
        1 0 1 1 1
        1 1 1 1 1
        1 0 0 0 1
        1 1 1 1 1
    ]

*/

input();
function input() {
    let r1 = [1, 0, 1, 0, 0];
    let r2 = [1, 0, 1, 1, 1];
    let r3 = [1, 1, 1, 1, 1];
    let r4 = [1, 0, 0, 0, 1];
    let r5 = [1, 1, 1, 1, 1];

    let inputArr = [r1, r2, r3, r4, r5];

    biggestRectangle(inputArr);

}

function biggestRectangle(arr) {

    let histArr = [];
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            let rowNum = i;
            let hist = 0;

            while (rowNum >= 0) {
                if (arr[rowNum][j] === 0) {
                    break;
                }
                hist += arr[rowNum][j];
                rowNum--;
            }

            histArr.push(hist);
        }

        console.log(histArr);
        histArr = [];
    }


}

function HistogramArea(arr) {
    let arr = [ 3, 1, 3, 2, 2 ];

    let left = [];
    let right = [];

    let stack = [];

    for (let i = 0; i < arr.length; i++) {

    }


}