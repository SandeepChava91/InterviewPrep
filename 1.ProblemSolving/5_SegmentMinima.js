
function segment_func(x, space) {
    // Write your code here

    let segments = [];

    let seg = [];

    for (let i = 0; i < space.length; i++) {
        let endIndex = i + x;

        if (!space[endIndex - 1]) {
            break;
        }

        seg = space.slice(i, i + x);
        seg.sort();

        if (seg.length > 0) {
            segments.push(seg[0]);
        }
    }

    if (segments.length > 1) {
        segments.sort();
        segments.reverse();

        if (segments.length > 0) {
            return segments[0];
        } else {
            return Error("Input incorrect");
        }
    }
    else {
        seg.reverse();
        return seg[0];
    }
}


// let x1 = 2, input1 = [8, 2, 4, 6];
// segment_func(x1, input1);

let x2 = 5, input2 = [2, 5, 4, 6, 8];
console.log(segment_func(x2, input2));

let x3 = 1, input3 = [1000000000];
console.log(segment_func(x3, input3));