console.log("Hello World!\n==========\n");

// Exercise 1 

for (let i = 0; i < 100; i++){
    if (i % 2 == 0){
        continue;
    }else{
        console.log(i);
    }
}


// Exercise 2 FIZZBUZZ
for (let i = 0; i < 100; i++){
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i,"FIZZBUZZ");

    } else { 
        if (i % 3 == 0) {
        console.log(i,"FIZZ)");
        }
      if(i % 3 == 0) {
        console.log(i,"(BUZZ)");
    }
    

}

}


// Exercise 3 

let i = 1;

while (i < 100){
   if (i % 2 != 0) {
    console.log (i);
   }

   i++;
}

let x = 1;

do{
    if (x % 2 !== 0){
        console.log(x);
    }
    x++;

} while (x < 100);

// Exercise 4
let numberToFind = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) +100);

for (let i = 1; i <= n; i++){
    if (i == numberToFind){

    console.log(`Found ${numberToFind}`);
    break;
}
if(i ==n){
console.log(`Did not find ${numberToFind} within the scope/range.`);
}
}





