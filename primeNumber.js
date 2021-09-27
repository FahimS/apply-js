
function isPrime(n){
    for (i=2; i<n; i++){
        if (n%i == 0){
            return 'Not a prime number';
        }
    }
    return 'Its a prime number';
}
let result = isPrime(139);
console.log(result);