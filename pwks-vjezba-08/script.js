// 1.

let findMin = (...numbers) => {
    return Math.min(...numbers);
}

console.log(findMin(1, 4, 12, -3));
console.log(findMin(1, -1));
console.log(findMin(3, 1));


// 2.

let mergeObjects = (object1, object2) => {
    return {...object1, ...object2};
}

console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));


// 3.

let doubleAndReturnArgs = (array, ...args) => {
    return [...array, ...args.map(element => element * 2)];
}

console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2],10,4));


// 4.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return this.name + ", " + this.age + " godina";
    }
}

const marko = new Person("Marko", 26);
console.log(marko.toString());


// 5.

// yellowPokemons: https://pokeapi.co/api/v2/pokemon-color/yellow/

fetch('https://pokeapi.co/api/v2/pokemon-color/yellow/')
    .then(response => response.json())
    .then(data => console.log(data.pokemon_species.map(pokemon => pokemon.name)));