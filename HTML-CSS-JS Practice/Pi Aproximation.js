// Calculating PI
function Pi() {
    inside = 0, trys = 0;

    this.compute = function (digits) {
        newTrys = 10 ** digits;
        trys += newTrys;
        randValY = Math.random() ** 2;

        for (let i = newTrys; i > 0; i--) {
            randValX = randValY;
            randValY = Math.random() ** 2;
            if (randValX + randValY <= 1) {
                inside++;
            }
        }

        return [4 * inside / trys, trys];
    }

    this.printIt = function (piAndTrys, digits, duration) {
        console.log(`pi: ${piAndTrys[0].toFixed(digits)} ` +
            `Calculated for ${piAndTrys[1]} ` + `values in ${duration} milliseconds, ` +
            `(Error: ${(piAndTrys[0] - Math.PI).toFixed(digits)})`);
    }
}

function AnotherPi() {
    this.compute = function (radius) {
        x = 0;
        y = radius;
        s = 0

        for (let y = radius; y >= x; y--) {
            for (let dx = 1; dx * x < y; dx++, x++) {
                s += y - dx - x + 1;
            }
        }

        return [8 * s, radius * radius];
    }

    this.printIt = function (piAndTrys, digits, duration) {
        console.log(`pi: ${(piAndTrys[0]/piAndTrys[1]).toFixed(digits)} ` +
            `Calculated with ${piAndTrys[0]}/${piAndTrys[1]} ` + ` in ${duration} milliseconds, ` +
            `(Error: ${(piAndTrys[0]/piAndTrys[1] - Math.PI).toFixed(digits)})`);
    }
}

const digits = 8;
pi = new AnotherPi();
for (let i = 2; i <= digits; i++) {
    start = Date.now();
    pi.printIt(pi.compute(10**i), 5, Date.now() - start);
}


// const digits = 7;
// pi = new Pi();
// for (let i = 1; i <= digits; i++) {
//     start = Date.now();
//     pi.printIt(pi.compute(i), i, Date.now() - start);
// }

// averaging
// const n = 20;
// for (const y of [digits - 1, digits]) {
//     console.log(`\nAveraging for ${n} values of ${y} digits`);
//     piAverage = 0
//     start = Date.now();
//     for (let i = 1; i <= n; i++) {
//         pi = new Pi();
//         piAverage += pi.compute(y)[0];
//     }
//     pi.printIt([piAverage / n, 10 ** (digits - 1)], (digits - 1), Date.now() - start);
// }

