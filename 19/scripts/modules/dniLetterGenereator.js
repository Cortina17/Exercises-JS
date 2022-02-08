export function dniLetter(){
    
    let n = document.getElementById('input-text').value;

    if (n % 23 === 0){
        result.innerHTML = 'Your letter will be "T"';
    } else if (n % 23 === 1){
        result.innerHTML = 'Your letter will be "R"';
    } else if (n % 23 === 2){
        result.innerHTML = 'Your letter will be "W"';
    }else if (n % 23 === 3){
        result.innerHTML = 'Your letter will be "A"';
    } else if(n % 23 === 4){
        result.innerHTML = 'Your letter will be "G"';
    } else if (n % 23 === 5){
        result.innerHTML = 'Your letter will be "M"';
    } else if (n % 23 === 6){
        result.innerHTML = 'Your letter will be "Y"';
    } else if (n % 23 === 7){
        result.innerHTML = 'Your letter will be "F"';
    } else if (n % 23 === 8){
        result.innerHTML = 'Your letter will be "P"';
    } else if (n % 23 === 9){
        result.innerHTML = 'Your letter will be "D"';
    } else if (n % 23 === 10){
        result.innerHTML = 'Your letter will be "X"';
    } else if (n % 23 === 11){
        result.innerHTML = 'Your letter will be "B"';
    } else if (n % 23 === 12){
        result.innerHTML = 'Your letter will be "N"';
    } else if (n % 23 === 13){
        result.innerHTML = 'Your letter will be "J"';
    } else if (n % 23 === 14){
        result.innerHTML = 'Your letter will be "Z"';
    } else if (n % 23 === 15){
        result.innerHTML = 'Your letter will be "S"';
    } else if (n % 23 === 16){
        result.innerHTML = 'Your letter will be "Q"';
    } else if (n % 23 === 17){
        result.innerHTML = 'Your letter will be "V"';
    } else if (n % 23 === 18){
        result.innerHTML = 'Your letter will be "H"';
    } else if (n % 23 === 19){
        result.innerHTML = 'Your letter will be "L"';
    } else if (n % 23 === 20){
        result.innerHTML = 'Your letter will be "C"';
    } else if (n % 23 === 21){
        result.innerHTML = 'Your letter will be "K"';
    } else if (n % 23 === 22){
        result.innerHTML = 'Your letter will be "E"';
    } else {
        alert('Please enter a valid letter')
    }
}