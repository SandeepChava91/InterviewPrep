
var titleToNumber = function (columnTitle) {

    let hashMap = {};

    for (let i = 0; i < 26; i++) {
        let element = String.fromCharCode(65 + i);

        hashMap[element] = i + 1;
    }

    let count = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {

        let val = hashMap[columnTitle[columnTitle.length - 1 - i]];
        let num = (26 ** i)

        count += val * num;
    }

    return count;

};



console.log(titleToNumber("ZY"));
console.log(titleToNumber("AAA"));
console.log(titleToNumber("BCD"));