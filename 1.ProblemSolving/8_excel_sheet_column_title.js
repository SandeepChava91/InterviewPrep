
function getAlphabet(x) {
    return String.fromCharCode((x % 26) + 65);
}

function PrintColName(colNum) {
    let cols = [];

    while (colNum) {
        // Reducing 1 since index starts from 0
        // colNum -= 1;

        const rem = (colNum - 1) % 26;
        // cols.push(rem);
        cols.push(getAlphabet(rem));

        colNum = (colNum - 1 - rem) / 26;
    }

    cols.reverse();

    return cols;
}

// 1 - A
// 27 - AA
// 28 - AB
// 53 - BA

// 225 - HQ
// 703 - AAA

console.log(PrintColName(704))