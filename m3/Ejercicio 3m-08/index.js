'use strict'

let frase = 'vida hay solo una.';
let counter = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == ' ' || frase[i] == '.' ){
        counter++;
    }
}

alert(counter); 