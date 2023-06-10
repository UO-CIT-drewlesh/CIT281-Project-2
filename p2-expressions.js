/*

CIT 281 Project 2
Name: Drew Lesh

*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// From Project 1: output a random string of letters between 5-25 characters
const projectOneRandomWord = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
        result += alphabet[getRandomInteger(1, alphabet.length-1)];
    
    }
    return result;
}

// returns a single random lower case letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(1, alphabet.length-1)];
}

// Returns a random string of a random length between 10-20.
const getRandomString = function(minLength, maxLength) {
    let randomString = "";
    for (let i=0; i < getRandomInteger(minLength, maxLength+1); i++) {
        randomString += getRandomLetter();
    }
    return randomString;
}
console.log("Random String:", getRandomString(10, 20));

// return a string in alphabetical order
const getSortedString = function(string) {
    return string.split("").sort().join("");
}
console.log("Sorted String:", getSortedString(projectOneRandomWord()));
