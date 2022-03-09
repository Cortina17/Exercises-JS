function divisors(number) {

    let allDivisors = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            allDivisors.push(i);
        }
    }

    return allDivisors.length > 1 ? allDivisors : `${number} is a prime number`;
}

module.exports = divisors;