
function Fairdie(sides) {
    this.sides = sides;

    this.roll = function () {
        // Returns a random integer from 0 to 9:
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

function LoadedDie(sides, weightedSide, weight) {
    this.sides = sides;
    this.weightedSide = weightedSide;
    this.weight = weight;

    this.roll = function () {
        // Returns a random integer from 0 to 9:
        let roll = Math.floor(Math.random() * (this.sides + this.weight)) + 1;

        if (roll <= weightedSide) {
            return weightedSide;
        }

        roll = roll - weightedSide;

        return roll;
    }
}


function test() {
    const fairdie = new Fairdie(6);
    let roll = fairdie.roll();
    console.log(roll);

    const loadedDie = new LoadedDie(6, 5, 5);
    let loadedRoll = loadedDie.roll();
    console.log(loadedRoll);
}

test();