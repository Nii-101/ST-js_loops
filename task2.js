// Using a while loop to calculate the factorial of 12

let i = 12
let a = i - 1
let fac = i
while (a > 1){
    fac = i * a
    i = fac
    i --
    a --
};

console.log(fac);