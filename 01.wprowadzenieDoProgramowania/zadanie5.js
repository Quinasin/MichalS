const prompt = require("prompt-sync")()

let slowo = prompt("Podaj słowo: ");
let array = slowo.split("");
let len = array.length

if(len%2 == 0){

    
  for(let i = 0; i <= (len/2); i++){
     if(array[i] != array[len - (i+1)]){
        console.log("Twoje słowo nie jest palindromem");
        break;
     }else if(i = len/2){
        console.log("Twoje słowo jest palindromem");
     }
   }
    

}else{
    for(let i = 0; i <= ((len-1)/2); i++){
        if(array[i] != array[len - (i+1)]){
           console.log("Twoje słowo nie jest palindromem");
           break;
        }else if(i = len/2){
           console.log("Twoje słowo jest palindromem");
        }
      }
}