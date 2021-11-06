function circle_functional() {
    const radiusArray = [3, 1, 2, 4];

    const Area = function (radius) {
        return (Math.PI * radius * radius);
    }

    const Circumference = function (radius) {
        return (2 * Math.PI * radius);
    }

    const Diameter = function (radius) {
        return (2 * radius);
    }

    const Calculate = function (radius, logic) {
        let calculatedParam = [];
        for (let index = 0; index < radius.length; index++) {
            const element = radius[index];
            calculatedParam.push(logic(element));
        }

        console.log(calculatedParam);
    }

    Calculate(radiusArray, Area);
    Calculate(radiusArray, Circumference);
    Calculate(radiusArray, Diameter);
}

function debounce_functional() {
    // debouncing

    // Basically, make an API call if the user pauses typing. The pause can vary from website to website
    // Only make an API call if the time between two key presses is greater than 300ms

    let counter = 0;
    function getDataFromAPI() {
        console.log("Fetching API... " + counter++);
    }

    let timer;
    function debounce(fn, delay) {
        return function() {
            clearTimeout(timer);
            
            timer = setTimeout(()=>{
                fn();
            }, delay)
        }
    }

    const debounceCaller = debounce(getDataFromAPI, 300);
    debounceCaller();
}