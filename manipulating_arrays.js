/*
1. push() - (similar to append()) Appends the value to the "end of array"
2. pop() - removes the "last" value from the array
3. shift() - removes the "first" value from the array
4. unshift() - Appends the value to the "beginning of array"
*/

var myArray = ["Boy", 19, "Girl", 15];
console.log(myArray);

myArray.push("Man");
myArray.push(40);
console.log(myArray);

var value = myArray.pop();
console.log(value);
var value = myArray.pop();
console.log(value);
console.log(myArray);

value = myArray.shift();
console.log(value);
value = myArray.shift();
console.log(value);
console.log(myArray);


myArray.unshift(35);
myArray.unshift("Woman");
console.log(myArray);

// Output
/*
[ 'Boy', 19, 'Girl', 15 ]
[ 'Boy', 19, 'Girl', 15, 'Man', 40 ]
40
Man
[ 'Boy', 19, 'Girl', 15 ]
Boy
19
[ 'Girl', 15 ]
[ 'Woman', 35, 'Girl', 15 ]
*/