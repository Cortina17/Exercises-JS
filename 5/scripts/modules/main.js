export function greater(){
    
    let first = document.getElementById('first-num').value;
    let second = document.getElementById('second-num').value;
    let p = document.getElementById('number');

    p.innerHTML = first > second ? first : second;
}