//recuperar las vocales
//recorrer el string. Cuando se encuentra una vocal, se recupera y se llevan a un array
//Checkar cuantas veces aparece cada letra en el array    

function countVowels(str) {

    // let vowels = ['a' == 0, 'e' == 0, 'i' == 0, 'o' == 0, 'u' == 0];
    let vowObj = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }

    for (let i = 0; i < str.length; i++) {

        if (str.includes('a')) {
            vowObj.a++;
        } else if (str.includes('e')) {
            vowObj.e++;
        } else if (str.includes('i')) {
            vowObj.i++;
        } else if (str.includes('o')) {
            vowObj.o++;
        } else if (str.includes('u')) {
            vowObj.u++;

        }
        return vowObj;
    }
}
module.exports = countVowels;