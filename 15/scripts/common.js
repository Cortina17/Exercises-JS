function commonDivs(numberOne, numberTwo){
    
    let num1 = numberOne;
    let num2 = numberTwo;
    let result = [];

    min = (num1 < num2) ? num1 : num2;

    for(let i = 0; i <= min; i++){
        if(num1 % i == 0 && num2 % i == 0){
            result.push(i);
        }
    }

    return result;
}

module.exports = commonDivs;