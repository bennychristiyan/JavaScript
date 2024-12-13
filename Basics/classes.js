class Book{
    // constructor. Instead of "self", use "this"
    constructor(author){
        this.author = author;
    }

    // Getter: A getter is a method that gets the value of a specific property. When you access a property that has a getter, the getter method 
    // is called, and its return value is used.
    get writer(){
        return this.author;
    }

    // Setter: A setter is a method that sets the value of a specific property. When you assign a value to a property that has a setter, the 
    // setter method is called with the value being assigned.
    set writer(new_author){
        this.author = new_author;
    }
}

let obj = new Book("Benny");
console.log(obj.writer); // Getter
obj.writer = "Benny Christiyan"; // Setter
console.log(obj.writer); // Getter

// Output
/*
Benny
Benny Christiyan
*/