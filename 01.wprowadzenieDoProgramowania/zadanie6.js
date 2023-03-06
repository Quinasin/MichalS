const prompt = require("prompt-sync")()

let tekst = prompt("Podaj tekst: ");
let slowo = prompt("Podaj słowo: ");

let array = tekst.split(" ");

let l = 0;
console.log(array);
console.log(array.length);


for(let i = 0; i <array.length; i++){
    console.log(array[i])
    if(array[i] == slowo){
        l = l+1
    }
}

console.log("Słowo '" + slowo + "' jest w tekście " + l + " razy");