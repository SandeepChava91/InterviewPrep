
let input = [2, 1, 3, 2, 3, 4, 5, 1, 2, 8];

MinJumps(input);

function MinJumps(arr) {

    let minJumps = new Array(arr.length);
    let minJumpPos = new Array(arr.length);

    minJumps[0] = 0;
    minJumpPos[0] = 0;

    for (let i = 1; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {
            if (j + arr[j] >= i) {
                if (!minJumps[i] || minJumps[i] > minJumps[j] + 1) {
                    minJumps[i] = minJumps[j] + 1;
                    minJumpPos[i] = j;
                }
            }
        }
    }

    console.log(minJumps);
    console.log(minJumpPos);
}