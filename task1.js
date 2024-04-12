// Prints out the first six numbers starting from 8 but terminates when an iteration is divisible by 5

for (let i = 8; i <= (8 + 5); i++){
    if ((i % 5) !== 0){
        console.log(i);
    }else{
        break;
    }
};