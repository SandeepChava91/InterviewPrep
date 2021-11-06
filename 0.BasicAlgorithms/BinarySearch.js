function BinarySearch(arr, num, min, max) {
    let mid = Math.floor((min + max + 1) / 2);

    if (num === arr[mid]) {
        return mid;
    }
    else if (num < arr[mid]) {
        max = mid - 1;
    }
    else {
        min = mid + 1;
    }

    return BinarySearch(arr, num, min, max);
}

let input = [1, 3, 7, 16, 19, 37, 54];

console.log(BinarySearchUtil(input, 3, 0, input.length - 1));
