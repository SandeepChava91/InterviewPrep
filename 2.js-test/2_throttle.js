// debouncing

// Basically, make an API call if the user pauses typing. The pause can vary from website to website
// Only make an API call if the time between two key presses is greater than 300ms

let counter = 0;
function getDataFromAPI() {
    console.log("Fetching API... " + counter++);
}

let timer;
function throttle() {
    let flag = true;

    return function () {
        if (flag) {
            getDataFromAPI();
            flag = false;
        }
        timer = setTimeout(() => {
            flag = false;
        }, 300);
    }
}

const throttleImplementer = throttle();