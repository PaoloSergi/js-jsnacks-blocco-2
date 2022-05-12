let emptyArray = [];

for (i=0; i<10; i++){

    let numRandom;

    do {
        numRandom = Math.floor((Math.random() * 100) + 1);

    } while (emptyArray.includes(numRandom))

    emptyArray.push(numRandom);
}

console.log(emptyArray);