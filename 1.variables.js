var myName = "Angela";

// 1)Declaration Let variable in a { } block scope can't be access outside of it

// 2) let name = value1, let name = value2, can't redeclare let twice
// Instead of this should be written name = value2;

// 3) let can be change it’s value const can't as it is constant but it can change its object value.

const constVar = { name: 'Arko' }
let letVar = 1
//so it will chage the object value, but if i stored a number in const variable first, 
//it will not change the the value if i assign some other value in the next line.
constVar.name = 'king'

console.log(constVar)
//     keyword   name     value

//to show a alert or pop up.
alert(myName)

var yourName = prompt("What is your name?");


alert("My name is " + myName + ", welcome to my course " + yourName + "!");



//simple code to know to how many characters written.


var user = prompt("Compose your message, it must be less than 250charaters.")

var count = user.length;
alert("You have written " + count + " characters,you have " + (250 - count) + "characters remaining.");


// to get specific characters sice is used

name.slice(0, 2);

//so it will return An ;   0 means the start and it will end before the last index 2 so An


alert(prompt("Compose your message").slice(0, 140));
//it will show first 140 characters from composed message.

// to upper case characters
name.toUpperCase();
//same efor lowercase
name.tolower.Case();