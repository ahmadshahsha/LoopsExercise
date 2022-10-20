// loops exercise
// 1
for(i = 1; i <= 7; i++){
    console.log(i);
}


// 2
for (i = 5; i <= 25; i+=4){
    console.log(i);
}

// 3a
const wizards = [
    'Marry . djdjjd',
    'JHermisone car',
    ' Ron weasley'

];
// 3b
for (friends of wizards){
    console.log(friends);
}

// 4
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies <= 7 ){
    harryPotterMovies++

// 4c
console.log(harryPotterMovies);
}

//  Bonus
// 5a
const hogwartsHouses = [
    ' GryFindor',
    'Huflepuff',
    'Ravenclaw',
    'Slytherin'
];
// 5b
for (houses of hogwartsHouses){

    for(letter of houses){
      
    console.log(letter);
}
}
// 6
const quote = [
    'Yer',
    'A',
    'Wizard',
    'Harry'
];
// 6b
let quoteLine;
for (i = 0; i < quote.length; i++){
    quoteLine = quoteLine + quote[i]+ '';
}
console.log(quoteLine);
// // or
// let magicQuote = '';
// for (i = 0; i < quote.length;i++){
//     magicQuote += `${qoute[i]}`;
// }
// magicQuote = magicQuote.trim();
// console.log(magicQuote);
// console.log(b);

// 7
for(i =1; i <=25; i++){

    if (i %3 === 3 && i % 5 === 0){
        console.log('Expecto Patronum'); 
    }
    else if ( i % 3 === 0){
    console.log('Expecto');
    }
    else if (i % 5 === 0){
        console.log('Patronum');
    } else {
        console.log(i);
    }
}