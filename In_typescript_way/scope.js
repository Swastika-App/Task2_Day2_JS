"use strict";
//Global Scope
var a = 1;
console.log(a);
// Local Scope
function localScope() {
    var b = 2;
    console.log(b);
}
localScope();
// Block Scope [let, const]
if (true) {
    let c = 3;
    const d = 5;
    console.log(c);
    console.log(d);
}
const e = 4;
console.log(e);
