let emptyArray = [];

let mySum = 0;

while ( mySum < 50 ){
    
    let myNum = parseInt(prompt("Inserisci un numero:"));
    
    mySum += myNum;
    emptyArray.push(myNum);
}

console.log(mySum, emptyArray);