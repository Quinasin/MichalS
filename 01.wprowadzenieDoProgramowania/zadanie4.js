

for(let l = 1; l <= 100; l++){
    
    for (let i = 2; i <= l ; i++){
        if(i < l && l%i == 0){
            break;
            
        }else if(i == l){
            console.log(l + " jest liczbą pierwszą")
        }
    }
    i = 2
    
}