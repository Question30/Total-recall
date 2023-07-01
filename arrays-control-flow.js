// Section A

// 1. What are the things in an array called?
//  index or indices

// 2. Do Arrays guarantee those things will be in order?
//  Yes 

// 3. What real-life thing could you model with an array?
// A list of your favorite movies.


//Section B
//1.Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["Be yourself; everyone else is already taken." , "In three words I can sum up everything I've learned about life: it goes on. " , "It is better to be hated for what you are than to be loved for what you are not. "];

// Section C
const randomThings = [1, 10, "Hello", true];

//1.How do you access the 1st element in the array? 
console.log(randomThings[0]);

//2.Change the value of "Hello"to "World"
randomThings[2] = "World";

//3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings[2]);

// Section D
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1.What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

//2.Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass[4]);

//3.Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass[5]);

//Section E
const myArray = [5, 10, 500, 20];

//1.Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Daemon");
console.log(myArray);

//2. Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);

//3.dd the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//4.Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

//5.Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

console.log(myArray.reverse());

//Yes it mutated the array and returned a reference tot he same array

// Section F
//let num = 100;
let num = 50;

if(num < 100){
    console.log("little number");
}else {
    console.log("big number");
}

// Section G
//let num2 = 4;
//let num2 = 14;
let num2 = 6;

if(num2 < 5){
    console.log("little number");
}else if(num2 > 10) {
    console.log("big number");
}else {
    console.log("monkey");
}

//Section H
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!"
);

//2.Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6,0, "raybans");
console.log(kristynsCloset);

//3.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] ="stained knit hat";
console.log(kristynsCloset);

//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);

//5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);

//6.Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);

//7.Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`);

//8.Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);