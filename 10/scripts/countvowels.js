function countVowels(string){

    if (string.match(/[a|e|i|o|u]/gi)){

        return((string.match(/[a|e|i|o|u]/gi)).length);

    } else {

        return 'There are no vowels in this phrase!';

    }
}

module.exports = countVowels;