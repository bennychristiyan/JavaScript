/* Data types:
undefined, null, boolean. string, symbol, number and object
*/

// Variables:

/* 1. var
User can re-declare and re-assign the variable. It is  "function-scoped" (i.e) The variable declared anywhere inside a function can be used 
anywhere inside that function
*/
var myName = "Benny";
var myName = 8;
myName = 20;

/* 2.let
User can re-assign the variable. It is "block-scoped" (i.e) The variable declared inside a block (loops, if-else blocks) can only be used inside 
that block
*/
let Name = "Benny";
Name = 5;

/* 3.const
User cannot re-declare or re-assign the variable. It is "block-scoped" (i.e) The variable declared inside a block (loops, if-else blocks) can only
be used inside that block
*/
const pi = 3.14;

console.log(myName);
console.log(Name);
console.log(pi);

// Output
/*
20
5
3.14
*/