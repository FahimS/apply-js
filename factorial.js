//.................using for-loop...........

let factorial =1;
for (let i = 1; i <= 10; i++) {
    factorial = factorial*i;
    console.log(i, factorial);
}





//..................using function on for-loop..........

function factorial(num){
    let factorial =1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial*i;
        // console.log(i, factorial);
    }
    return factorial;
}
var result = factorial(10);
console.log(result);






//..................using while-loop........

let i = 1, factorial = 1;
while (i <= 10) {
    factorial = factorial * i
    // console.log(i, factorial);
    i++;

}
console.log(factorial);




//.............using function on while-loop

function factorial(n) {
    let i = 1, fact = 1;
    while (i <= n) {
        fact = fact * i
        // console.log(i, factorial);
        i++;
    }
    return fact;
}
let result = factorial(10);
console.log(result);



//...........using Recursive........

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
let result = factorial(5);
console.log(result);