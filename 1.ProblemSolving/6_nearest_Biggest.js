// Find the closest greater element

// Input : arr[] = {10, 5, 11, 6, 20, 12} 
// Output : 11 6 12 10 -1 20

// Input : arr[] = {10, 5, 11, 10, 20, 12} 
// Output : 11 10 12 11 -1 20 

function NearestBiggest(arr) {
    // Write your code here
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        
        let minBigNum = -1;
        for (j = 0; j < arr.length; j++) {
            if(i===j){
                continue;
            }

            if (arr[j] > arr[i]) {
                if(minBigNum == -1 || minBigNum > arr[j]){
                    minBigNum = arr[j];
                }
            }
        }

        result.push(minBigNum);
    }

    return result;
}



// const input = [10, 5, 11, 6, 20, 12];
const input = [10, 5, 11, 10, 20, 12];
console.log(NearestBiggest(input));
