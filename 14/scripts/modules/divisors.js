export function divisors() {

    let number = document.getElementById("input-text").value;

    let allDivisors = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            allDivisors.push(i);
        }
    }

    result.innerHTML = allDivisors.length > 1 ? allDivisors : `${number} is a prime number`;
}
