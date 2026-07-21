// examples/01-basics/variables.js

var a = 1;
let b = 2;
const c = 3;

b = 20; // OK
// c = 30; // ❌ Lỗi: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
