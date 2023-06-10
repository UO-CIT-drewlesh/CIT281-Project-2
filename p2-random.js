/*

CIT 281 Project 2
Name: Drew Lesh

*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// From Project 1: output a random string of letters between 5-25 characters
function projectOneRandomWord() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
        result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log(result);
}

// returns a single random lower case letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,25)];
}

// Returns a random string of certain length
function getRandomString(minLength, maxLength) {
    let randomString = "";
    for (let i=minLength; i<=maxLength; i++) {
        randomString += getRandomLetter();
    }
    return randomString;
}

console.log("Random String:", getRandomString(10, 20));

// return a string in alphabetical order
function getSortedString(string) {
    return string.trim().split("").sort().join("");
}

console.log("Sorted String:", getSortedString(getRandomString(10, 20)));
