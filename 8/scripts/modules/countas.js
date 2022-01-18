export function countas(){

    let p = document.getElementById('result');
    let string = document.getElementById('text-input').value;

    p.innerHTML = (string.toLowerCase().split("")).filter(str => str === 'a').length++
}