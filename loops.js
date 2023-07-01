//Section A

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i <= 400; i++) {
    console.log(i);
}

for (let i = 12; i < 4000; i+= 3) {
    console.log(i);
}

//Section B
for (let i = 1; i <= 100; i++) {
        if(i % 2 === 0){
            console.log(`${i} <-- is an even number`);
        }else{
            console.log(i);
        }
     }

// Section C
for (let i = 0; i <=100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`I found a ${i}. Three is a crowd High five!`);
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    }else if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`);
    }
}

// Section D
let bank_account = 0;

for (let i = 1; i <= 10; i ++) {
    bank_account += i;
}

console.log(bank_account);

bank_account = 0;

for (let i = 1; i <= 100; i ++) {
    bank_account += i *2;
}
console.log(bank_account);
