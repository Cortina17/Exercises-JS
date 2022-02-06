export function isPrime() {

    let n = document.getElementById('input-text').value;

    if(n <= 0){
        result.innerHTML = 'You need to write a number greater than 1';
    } else if(n === 1){
        result.innerHTML = '1 is not prime nor composite';
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result.innerHTML = 'is not a prime number'
            }
        }
        result.innerHTML = 'is not a prime number'
    }
}