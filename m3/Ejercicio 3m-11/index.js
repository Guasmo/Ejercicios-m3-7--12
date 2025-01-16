'use strict';
let nums = [2, 3, 2, 3, 5];
let outPut = 'Salida:\n';

for (let i = 0; i < nums.length - 1; i++) {  // usamos nums.length - 1 para iterar 4 veces
    outPut += i + ' ' + (nums.length - 2 - i) + '\n';  // nums.length - 2 - i para la salida invertida
}
alert(outPut);
