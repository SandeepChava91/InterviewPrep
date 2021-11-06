/**
 * The below question is asked in HITACHI VANTARA
 * 
 * Given a Sentence - "one two three", reverse each word in the sentence.
 * Expected Output - "eno owt eerht"
 */


// Add a reverse functionality to a string
String.prototype.reverse = function () {
    let result = "";
    for (let i = this.length - 1; i >= 0; i--) {
        result = result + this[i];
    }

    return result;
}

// Convert the sentence to array of strings and reverse each word
function reverser(str) {

    let arr = str.split(' ');

    let result = arr.map((item) => {
        return item.reverse();
    });

    console.log(...result);
}



reverser("one two three");