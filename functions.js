//Section A
function printGreeting(name){
    return `Hello there, ${name}!`;
}

console.log(printGreeting('Slimer'));

//Section B
function printCool(name){
    return `${name} is cool`;
}

console.log(printCool("Captain Reynolds"));

//Section C
function calculateCube(num){
    return Math.pow(num, 3);
}

console.log(calculateCube(5));

//Section D
function isVowel(letter){
    letter = letter.toLowerCase();
    if (letter === 'a' || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u") {
        return true;
    }else {
        return false;    
    }
}

console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('c'));

//Section E
function getTwoLengths(str1, str2){
    const myArr = [str1.length, str2.length];
    return myArr;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//Section F
function getMultipleLengths(arr){
    const myArr =[]
    for (let i = 0; i < arr.length; i++){
        myArr.push(arr[i].length);
    }

    return myArr;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//Section H
function printLongestWord(arr){
    let longestWord = arr[0].length;
    for (let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord){
        longestWord = arr[i];
      }else{
        longestWord = longestWord;
      }
    }

    return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));