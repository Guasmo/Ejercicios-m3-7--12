'use strict'

let frase = 'vida hay una sola.'
let numWord = 2;
let count = 0;
let start = 0;
let end = frase.length;
let space = ' '

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == space) {
        count++; 
        if (count === numWord - 1) {
            start = i;
        } if (count === numWord) {
            end = i;
        }
    }
}

alert(`La palabra es:${frase.substring(start, end)}`) // hay