const prompt = require("prompt-sync")()

let liczba = parseInt(prompt("Podaj liczbe: "));
let lPierwsza = true;

for (let i = 2; i < liczba ; i++){
    if(liczba%i == 0){
        lPierwsza = false;
        break;
    }
}

if (lPierwsza) {
    console.log(liczba + " jest liczbą pierwszą")
}else{
    console.log(liczba + " nie jest liczbą pierwszą")
}