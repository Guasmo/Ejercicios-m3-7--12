'use strict'

let nums10 = [5, 10, 7, 15, 12];
let max = nums10[0];

for (let i = 0; i < nums10.length; i++) {
    if (nums10[i] > max) {
        max = nums10[i];
    }
}
alert("Número mayor: " + max);
