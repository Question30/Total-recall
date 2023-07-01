//Section A
//1.Create an object called user.
//2.Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
const user = {
    name: 'Alex',
    email: 'alex@123.com',
    age: 28,
    purchased: []
};

//Section B
//1.Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "alexander@123.com";

//2.Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;

//Section C
//1.Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "NYC";

//Section D
//1.Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates");

//2.Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind");

//3.Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");

//4.Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);

//Section E
//1.Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend ={
    name: 'Dejah',
    age: 28,
    location: "NYC",
    purchased: []
};

//2.Console.log just the friend's name
console.log(user.friend.name);

//3. Console.log just the friend's location
console.log(user.friend.location);

//4.CHANGE the friend's age to 55
user.friend.age = "55";

//5.The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");

//6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");

//7.Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

//Section F
//1.Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

//2.Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

//Section G part 1
//1.Write a single function updateUserthat takes no parameters. When the function is run, it should:

//2.it should increment the user's age by 1

//3.make the user's name uppercase
function updateUser () {
    user.age++;
    user.name.toUpperCase();
}

//Section G part 2
function oldAndLoud(person){
   person.age++;
  person.name = person.name.toUpperCase();
}

oldAndLoud(user);
console.log(user);