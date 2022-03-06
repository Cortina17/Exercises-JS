function divisors(number) {

    let allDivisors = [];

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            allDivisors.push(i);
        }
        console.log(allDivisors);
        return allDivisors;
    }
}

module.exports = divisors;