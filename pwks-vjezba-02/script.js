// 1.

let number;

do {
    number = +prompt("Please enter number:");
    if(isNaN(number))
        alert("Not a number. Try again.");
} while (isNaN(number));

console.log(number);

if (number == 0)
    console.log("Number is zero.");
else if (number % 2 == 0)
    console.log("Number is even.");
else
    console.log("Number is odd.");

console.log((number == 0) ? "Number is zero." :
                            (number % 2 == 0) ? "Number is even." : "Number is odd.");


// 2.

let study_year = +prompt("Please enter year of study:");

switch(study_year) {
    case 1:
    case 2:
    case 3:
        console.log("You are an undergraduate student.");
        break;
    case 4:
    case 5:
        console.log("You are a graduate student.");
        break;
    default:
        console.log("Error! Entered value is not a year of study.");
        break;
}


// 3.

let n = 155;
while (n >= 105) {
    if (n % 10 == 0)
        console.log(n);
    n--;
}


// 4.

let sum = 0;
for (let i = 50; i <= 100; i++) {
    sum += i;
}
console.log(sum);