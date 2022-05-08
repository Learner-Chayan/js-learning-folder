

// let func = new function([arg1,arg2,arg3....argn] , functionBody);


let sum = new Function('n1', 'n2', 'let s=n1+n2;return s');
let sum2 = new Function('n1', 'n2', '{s=n1+n2; return s;}');
let log = new Function('console.log("log is working")');

console.log('Summmation1 is = '+sum(100,5));
console.log('Summmation2 is = '+sum2(100,50));
log();

