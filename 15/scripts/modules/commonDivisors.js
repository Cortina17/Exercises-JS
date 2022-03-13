export function commonDivs(){
    
    let num1 = document.getElementById('numberOne').value;
    let num2 = document.getElementById('numberTwo').value;
    let newArr = [];

    let min = (num1 < num2) ? num1 : num2;

    for(let i = 0; i <= min; i++){
        if(num1 % i == 0 && num2 % i == 0){
            newArr.push(i);
        }
    }
    result.innerHTML = `The divisors of ${num1} and ${num2} are ` + newArr +".";
}
