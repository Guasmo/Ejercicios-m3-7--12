'use strict';
let nums = [2, 3, 2, 3, 5];
let outPut = 'Salida:\n';

for (let i = 0; i < 4; i++) {  // cambiado de nums.length a 4
    outPut += i + ' ' + (nums.length - 1 - i) + '\n';
}
alert(outPut);