// 1.

// regular functions

function is_even(num) { return !(num % 2); }

function sum_even() {
    let sum = 0;
    return function(num) {
        return sum += num;
    }
}

function count_odd() {
    let cnt = 0;
    return function() {
        return cnt++;
    }
}

function test_user_input() {
    let num;
    let sum = sum_even();
    let cnt = count_odd();
    while (true) {
        num = +prompt("Please enter number:");
        if (num == 0)
            break;
        is_even(num) ? sum(num) : cnt();
    }
    console.log("Sum of even numbers: ", sum(num)); 
    console.log("Number of odd numbers: ", cnt()); 
}

test_user_input();

// arrow functions

let is_even_arrow = num => !(num % 2);

let sum_even_arrow = () => {
    let sum = 0;
    return(num) => sum += num;
}

let count_odd_arrow = () => {
    let cnt = 0;
    return() => cnt++;
}

let test_user_input_arrow = () => {
    let num;
    let sum = sum_even_arrow();
    let cnt = count_odd_arrow();
    while (true) {
        num = +prompt("Please enter number:");
        if (num == 0)
            break;
        is_even_arrow(num) ? sum(num) : cnt();
    }
    console.log("Sum of even numbers: ", sum(num)); 
    console.log("Number of odd numbers: ", cnt()); 
}

test_user_input_arrow();


// 2.

// regular functions

function result(subject_name) {
    return function(points_earned) {
        return function(points_total) {
            console.log("Iz kolegija " + subject_name + " ostvarili ste " + ((points_earned / points_total) * 100).toFixed(2) + "%.");
        }
    }
}

result("MUP/PWKS")(25)(35);

// arrow functions

let result_arrow = subject_name => points_earned => points_total => {
    console.log("Iz kolegija " + subject_name + " ostvarili ste " + ((points_earned / points_total) * 100).toFixed(2) + "%.");
}

result_arrow("MUP/PWKS")(25)(35);