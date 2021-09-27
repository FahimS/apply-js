// let fibo = [0,1];
// for (let i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
//     // console.log(fibo[i], fibo[i-1], fibo[i-2]);
// }
// console.log(fibo);


//..........using function...........

// function fibo(n){
//     let fibo = [0,1];
//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
        
//     }
//     return fibo;
// }
// var result = fibo(10)
// console.log(result);



//...............using rcursive element..........

// function fibo(n){
//     if (n==0){
//         return 0;
//     }
//     if (n==1){
//         return 1;
//     }
//     else{
//         return fibo(n-1) + fibo(n-2);
//     }
// }
// var result = fibo(10);
// console.log(result);



//...........using recursive series...........

function fibonacci(n){
    if (n==0){
        return [0];
    }
    if (n==1){
        return [0,1];
    }
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(10);
console.log(result);