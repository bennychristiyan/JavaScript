// Quotes inside a string

// 1.Use " \ " before ' " ' or " ' " or " ` "
var myString = "My name is \"Benny\"";
console.log(myString);

// 2.Use ' ' or ` ` or " "
myString = 'My name is "Benny"';
console.log(myString);
myString = `My name is "Benny"`;
console.log(myString);
myString = "My name is 'Benny'";
console.log(myString);

// Output
/*
My name is "Benny"
My name is "Benny"
My name is "Benny"
My name is 'Benny'
*/

/*
1.\\ - backslash (Prints literal backslash)
2.\n - newline
3.\t - tab space

4.\r – Carriage Return: 
Moves the cursor back to the beginning of the current line, allowing you to overwrite text that has already been written on that line. (Works only 
in Node.js, terminals)
Line break or new line (Works only in web browsers, IDEs(VS Code))

Example:
console.log("Hello\rWorld");

Output:
World

Explanation:
Hello is printed first.
Then \r moves the cursor back to the start of the line.
World is printed starting from the beginning, so it overwrites Hello.

Output:
World

If we want to partially overwrite text:

Example:
console.log("Hello\rWor");

Output:
Worlo

Explanation:
Hello is initially printed.
\r moves the cursor back to the start of the line.
Wor overwrites the first three letters of Hello, leaving the remaining lo intact.
*/

myString ="FirstLine\n\t\\SecondLine";
console.log(myString);
myString = "Hello\rWorld";
console.log(myString);

// Output
/*
FirstLine
	\SecondLine
Hello
World
*/ 