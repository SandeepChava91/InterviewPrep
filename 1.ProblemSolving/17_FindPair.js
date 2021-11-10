let twoSum = (array, sum) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++) {
        if (hashMap[array[i]]) {
            results.push([hashMap[array[i]], array[i]])
        } else {
            hashMap[sum - array[i]] = array[i];
        }
    }
    return results;
}

console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50));
