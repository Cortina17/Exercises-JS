export function commonDivs(){
    
    let num1 = document.getElementById('numberOne');
    let num2 = document.getElementById('numberTwo');
    let newArr = [];

    let min = (num1 < num2) ? num1 : num2;

    for(let i = 0; i <= min; i++){
        if(num1 % i == 0 && num2 % i == 0){
            newArr.push(i);
        }
    }
    result.innerHTML = newArr;
    console.log(newArr);
}
