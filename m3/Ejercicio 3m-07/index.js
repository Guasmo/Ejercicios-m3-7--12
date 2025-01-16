'use strict'

let name = 'sudamericano';
let counter = 0;

for (let i = 0; i < name.length; i++) {
    if (name[i] === 'a') {
        counter++;
    }
}

alert(counter); // 2