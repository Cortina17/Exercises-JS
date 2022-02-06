function isPrime(n) {

    if(n <= 0){
        return 'You need to write a number greater than 1';
    } else if(n === 1){
        return '1 is not prime nor composite';
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return 'is not a prime number'
            }
        }
    }
    return 'is a prime number'
}

module.exports = isPrime;