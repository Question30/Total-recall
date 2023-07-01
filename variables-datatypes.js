/* Section A

1. How do we assign a value to a variable?
We assign a value with the "=";
ex. let myVar = 10;

2.How do we change the value of a variable?
You can reassign the value of a variable with the "="
ex. myVar = 20;

3.How do we assign an existing variable to a new variable?
By assing the existing variable to the new variable.
ex. newVar = myVar;

4.Remind me, what are declare, assign, and define?
declare : let myVar; or const myVar;
assign: myVar = 10;
define : let myVar = 10; or const myVar = 10;

5. What is pseudocoding and why should you do it?
Psuedocoding is writing out/ designing a program in plain english.
We should psuedocode to help plan our actual code.

6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
80% - 90% thinking vs actually typing code.
*/

// Section B
//1.Create a variable called firstVariable
let firstVariable;
//2.Assign it the value of the string "Hello World"
firstVariable = "Hello World";
//3.Change the value of this variable to some number
firstVariable = 5;
//4.Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
//5.Change the value of secondVariableto any string.
secondVariable = "Hello";
//6.What is the value of firstVariable? => 5
console.log(firstVariable);
// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

const yourName = "Alexander";
console.log(`Hello, my name is ${yourName}`);

// Section C
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// Section D
//let animal = "cow";
let animal = "chicken";

if(animal === "cow"){
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow.");
}

// Section E
//const yourAge = 16;
const yourAge = 14;

if (yourAge >= 16) {
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young.");
}
