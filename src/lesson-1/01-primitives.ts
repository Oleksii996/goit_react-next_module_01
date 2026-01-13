/* 
- Прості типи: string, number, boolean, null, undefined, any
- Виведення типів (type inference)
 */

let a: string = "test";
let b: number = 42;
let c: boolean = true;

a = "new string";
console.log(typeof a); // "string"

let d: null = null;
let e: undefined = undefined;

{
  //any

  let f: any;
  // f = "could be anything";
  // f = 123;
  //f = true;

  if (typeof f === "string") {
    f.toLowerCase();
  }
}

{
  //unknown

  let g: unknown;
  //g = "now a string";
  //g = 123;
  //g = true;
  //g.toLowerCase(); // Error: Object is of type 'unknown'.

  if (typeof g === "string") {
    g.toLowerCase();
  }
}
