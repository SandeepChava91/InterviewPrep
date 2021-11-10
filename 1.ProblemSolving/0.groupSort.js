// Return the number of occurences in descending order

// Input - [3, 3, 2, 1, 2]
// Output - [[3, 2], [2, 2], [1, 1]]


// Input - [3, 7, 2]
// Output - [[2, 1], [3, 1], [7, 1]] 

function groupSort(arr) {
    // Write your code here

    let hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]]) {
            hashMap[arr[i]]++;
        }
        else {
            hashMap[arr[i]] = 1;
        }
    }

    console.log(hashMap);

    let sortedKeys = Object.keys(hashMap).sort((a, b) => {
        if (hashMap[b] - hashMap[a] === 0) {
            return b - a;
        }

        return hashMap[b] - hashMap[a];
    });

    let result = [];
    for (let i = 0; i < sortedKeys.length; i++) {
       result.push([parseInt(sortedKeys[i]), hashMap[sortedKeys[i]] ]);
    }
    
    return result;
}


// const input = [3, 3, 7, 7, 2, 2, 3];
const input = [3, 3, 2, 1, 2];

const result = groupSort(input);
console.log(result);
