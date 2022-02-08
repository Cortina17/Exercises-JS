function test_dni_letter_gen(n){
    
    if (n % 23 === 0){
        return 'Your letter will be "T"';
    } else if (n % 23 === 1){
        return 'Your letter will be "R"';
    } else if (n % 23 === 2){
        return 'Your letter will be "W"';
    }else if (n % 23 === 3){
        return 'Your letter will be "A"';
    } else if(n % 23 === 4){
        return 'Your letter will be "G"';
    } else if (n % 23 === 5){
        return 'Your letter will be "M"';
    } else if (n % 23 === 6){
        return 'Your letter will be "Y"';
    } else if (n % 23 === 7){
        return 'Your letter will be "F"';
    } else if (n % 23 === 8){
        return 'Your letter will be "P"';
    } else if (n % 23 === 9){
        return 'Your letter will be "D"';
    } else if (n % 23 === 10){
        return 'Your letter will be "X"';
    } else if (n % 23 === 11){
        return 'Your letter will be "B"';
    } else if (n % 23 === 12){
        return 'Your letter will be "N"';
    } else if (n % 23 === 13){
        return 'Your letter will be "J"';
    } else if (n % 23 === 14){
        return 'Your letter will be "Z"';
    } else if (n % 23 === 15){
        return 'Your letter will be "S"';
    } else if (n % 23 === 16){
        return 'Your letter will be "Q"';
    } else if (n % 23 === 17){
        return 'Your letter will be "V"';
    } else if (n % 23 === 18){
        return 'Your letter will be "H"';
    } else if (n % 23 === 19){
        return 'Your letter will be "L"';
    } else if (n % 23 === 20){
        return 'Your letter will be "C"';
    } else if (n % 23 === 21){
        return 'Your letter will be "K"';
    } else{
        return 'Your letter will be "E"';
    }
}


module.exports = test_dni_letter_gen;