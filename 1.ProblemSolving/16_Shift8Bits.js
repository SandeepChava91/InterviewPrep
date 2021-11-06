
function Shift(input) {

    console.log((input.toString(2)));

    let a = (input >> 8);
    let b = (input << 8);

    console.log(a.toString(2));
    console.log(b.toString(2));


    let c = a + b;

    let d = c & 65535
    console.log(d.toString(2));

}

Shift(43981);