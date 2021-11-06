/* debouncing
Basically, make an API call if the user pauses typing. The pause can vary from website to website
Only make an API call if the time between two key presses is greater than 300ms
*/

/*
    Debounce in Normal Implementation
*/
let counter = 0;
function getDataFromAPI() {
    console.log("Fetching API... " + counter++);
}

let timer;
function debounce() {

    clearTimeout(timer);

    timer = setTimeout(()=>{
        getDataFromAPI();
    }, 300)
}


/*
    Debounce in Functional Programming
*/
let counter = 0;
function getDataFromAPI() {
    console.log("Fetching API... " + counter++);
}

let timer;
function debounceImplementer(fn, delay) {
    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}

const debounce = debounceImplementer(getDataFromAPI, 300);
