export function divisors() {

    const number = document.getElementById('input-text').value;
    const result = document.getElementById('result');

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            result.innerHTML = "The divisors of " + number + " are: " + i;
        }
    }
}