function showVowels(string){

    let str = string.match(/(a|e|i|o|u)/ig);

    return str !== null ? str : 'There are no vowels in this phrase!';
}

module.exports = showVowels;