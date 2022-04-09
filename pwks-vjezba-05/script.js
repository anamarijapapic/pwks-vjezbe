// 1.

function printNumbers() {
    let tmp = 500;
    setTimeout(function print() {
        console.log(tmp);
        tmp < 1000 ? setTimeout(print, 1000) : tmp < 1500 ? setTimeout(print, 2000) : clearTimeout();
        tmp += 100;
    }, 2000);
}

printNumbers();


// 2.

let curry = foo => {
    let result = 1;
    return next = x => {
        if (!x) { return result; }
        if (x > 0 && x < 20) { result = foo(result, x); }
        return next;
    }
}

const multiply = curry((a, b) => a * b);
console.log("Product:", multiply(1)(1.5)(2)(-4)(5)(10)(20)());


// 3.

let generateRandomNumber = (min, max) => Math.round((max - min + 1) * Math.random() + min);

let findMinMax = (array) => [Math.min(...array), Math.max(...array)];

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(generateRandomNumber(50, 150));
}
console.log("Your array:", numbers);

let [min, max] = findMinMax(numbers);
console.log("Min:", min, "at index:", numbers.indexOf(min));
console.log("Max:", max, "at index:", numbers.indexOf(max));