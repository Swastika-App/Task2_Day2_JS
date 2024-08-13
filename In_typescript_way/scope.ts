//Global Scope

var a: number = 1;

console.log(a);

// Local Scope

function localScope(): void {
  var b: number = 2;
  console.log(b);
}

localScope();

// Block Scope [let, const]

if (true) {
  let c: number = 3;
  const d: number = 5;
  console.log(c);
  console.log(d);
}


const e: number = 4;

console.log(e);
