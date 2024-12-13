function func(){
    console.log("This is a function");
}

func();

function passing_parameters(a,b){
    console.log(a - b);
}

passing_parameters(34, 52);

// Arrow functions
var passing_parameters = (a,b) => a - b;
console.log(passing_parameters(63, 42));

var myConcat = (arr1, arr2) => arr1.concat(arr2); // No curly braces required, since only a return statement is inside the function
console.log(myConcat([1,2,3], [4,5,6]));


// Output
/*
This is a function
-18
21
[ 1, 2, 3, 4, 5, 6 ]
*/