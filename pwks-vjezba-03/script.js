// 1.

function sum_first_last(...args) {
    let result = 0;
    if (args.length >= 2) {
        result = args[0] + args[args.length - 1]
    }
    return result;
}

console.log(sum_first_last(10, 15, 20));
console.log(sum_first_last(4, 8));
console.log(sum_first_last(1));
console.log(sum_first_last());


// 2.

let num_arr = [0, 2, 8, -4, -6, 1, -9, -3, 7, 5, 10]

function is_positive(x) {
    return x > 0;
}

function is_divisible(x, y) {
    return x % y == 0;
}

function array_number_check(num_arr, is_positive, is_divisible, n) {
    for (const i of num_arr) {
        if (is_positive(i) && is_divisible(i, n))
            console.log(i);
    }
}

array_number_check(num_arr, is_positive, is_divisible, 2)


// 3.

function user_input() {
    do {
        input_num = +prompt("Please enter number:");
        if(isNaN(input_num))
            alert("Not a number. Try again.");
    } while (isNaN(input_num));
    return input_num;
}

function sum(x, y) {
    return x + y;
}

function calculate_sum_from_inputs(user_input, n, sum) {
    total_sum = 0;
    for(let i = 0; i < n; i++) {
        total_sum = sum(total_sum, user_input());
    }
    return total_sum;
}

console.log(calculate_sum_from_inputs(user_input, 5, sum));