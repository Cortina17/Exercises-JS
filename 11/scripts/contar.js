function countVowels(str) {
    
    str = str.toLowerCase();

    let a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0,
    consonants = 0;

    let total = []

    for (let index = 0; index < str.length; index++) {
        if (str[index].match(/[aeiou]/)) {
            switch (str[index]) {
                case 'a':
                    a++;
                    break;
                case 'e':
                    e++;
                    break;
                case 'i':
                    i++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'u':
                    u++;
                    break;
            }
        } else if (str[index].match(/[bcdfghjklmnñpqrstvwxyz]/)) {
            consonants++;
        }
    }
    
    total.push(a,e,i,o,u,consonants);
    return total;
}

module.exports = countVowels;
