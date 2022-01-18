export function checkif(){
    
    let cont = document.getElementById('result');
    let number = document.getElementById('input-number').value;
    let numb = Number(number);

    cont.innerHTML = numb % 2 === 0 ? 'This number is even!' : 'This number is odd!';
}