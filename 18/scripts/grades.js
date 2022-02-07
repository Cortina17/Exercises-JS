function showGrades(num){

    if(num >= 9){
        return 'Outstanding';
    } else if(num < 9 && num >= 7){
        return 'Remarkable';
    } else if(num < 7 && num >= 5){
        return 'Suficient';
    }else if(num < 5 && num >= 3){
        return 'Insuficient';
    } else if(num < 3 && num >= 0){
        return 'Too poor';
    }
}

module.exports = showGrades;