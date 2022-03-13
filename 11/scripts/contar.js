//recuperar las vocales
//recorrer el string. Cuando se encuentra una vocal, se recupera y se llevan a un array
//Checkar cuantas veces aparece cada letra en el array

function countVowels(str) {
    
    let phrase = str.toLowerCase();

    let a = [0],
        e = [0],
        i = [0],
        o = [0],
        u = [0],
        consonants = 0;

    for (let index = 0; index < phrase.length; index++) {
        let char = phrase.charAt(index);
        if (char.match(/[aeiou]/)) {
            switch (char) {
                case 'a':
                    a.push(1);
                    break;
                case 'e':
                    e.push(index);
                    break;
                case 'i':
                    i++;
                    break;
                case 'o':
                    o.push(1);
                    break;
                case 'u':
                    u++;
                    break;
            }
        } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            consonants++;
        }
        console.log(a.concat(e,i,o,u));
        return a.concat(e,i,o,u);
    }
}

module.exports = countVowels;
