function showGrades(num){

    if (num >= 0 && num <= 10){

        return num >= 9 ? 'Outstanding' : num < 9 && num >= 7 ? 'Remarkable' : num < 7 && num >= 5 ? 'Suficient' : num < 5 && num >= 3 ? 'Insuficient' : 'Too poor'

    } return 'Enter a number between 0 and 10'

}

module.exports = showGrades;