export function prime() {

    let n = document.getElementById('input-text').value;

    if (n <= 1) {
        result.innerHTML = 'is not a prime number'
    }

    if (n === 2) {
        result.innerHTML = 'is a prime number'
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result.innerHTML = 'is not a prime number'
        }
    }
    result.innerHTML = 'is a prime number'
}
