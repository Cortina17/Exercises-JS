function prime(n) {

    if (n <= 1) {
        return 'is not a prime number'
    }

    if (n === 2) {
        return 'is a prime number'
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return 'is not a prime number'
        }
    }
    return 'is a prime number'
}

module.exports = prime;