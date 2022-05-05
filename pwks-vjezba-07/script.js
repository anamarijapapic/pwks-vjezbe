// 1.

let getDay = dateString => {
    myDate = new Date(dateString);
    var myDay = myDate.getDay();
    var days = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"];
    return days[myDay];
}

console.log(getDay("12/07/2016"));
console.log(getDay("09/04/2016"));
console.log(getDay("12/08/2011"));


// 2.

const scores = { "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, 
                 "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23 }

let nameScore = name => {
    total_score = 0;

    for (letter of name)
        if (letter in scores)
            total_score += scores[letter]
    
    if (total_score >= 600)
        console.log("THE BEST");
    else if (total_score >= 301 && total_score <= 599)
        console.log("VERY GOOD");
    else if (total_score >= 61 && total_score <= 300)
        console.log("PRETTY GOOD");
    else
        console.log("NOT TOO GOOD");
}

nameScore("MUBASHIR");
nameScore("YOU");
nameScore("MATT");
nameScore("PUBG");


// 3.

let freeShipping = order => {
    total_price = 0;

    Object.values(order).forEach(price => {
        total_price += price;
    });

    return total_price > 50;
}

console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));


// 4.

let specialReverse = (sentence, letter) => {
    const allWords = sentence.split(" ");
    return allWords.reduce((new_word, word) => {
        if (!word.startsWith(letter)) {
            new_word.push(word);
            return new_word;
        };
        new_word.push(word.split("").reverse().join(""));
        return new_word;
   }, []).join(' ');
}

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));