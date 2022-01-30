export function countvowels() {

    const parent = document.getElementById('result');

    let phrase = document.getElementById('input-text').value.toLowerCase();

    let a = 0,
        e = 0,
        i = 0,
        o = 0,
        u = 0,
        consonants = 0;

    for (let index = 0; index < phrase.length; index++) {
        let char = phrase.charAt(index);
        if (char.match(/[aeiou]/)) {
            switch (char) {
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
        } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            consonants++;
        }
    }
    parent.innerHTML = ('There are ' + a + ' a\'s in this phrase.<br>There are ' + e + ' e\'s in this phrase.<br>There are ' + i + ' i\'s in this phrase.<br>There are ' + o + ' o\'s in this phrase.<br>There are ' + u + ' u\'s in this phrase.<br>And there are ' + consonants + ' consonants in this phrase.');
}



// let a_vo = 0, e_vo = 0, i_vo = 0, o_vo = 0, u_vo = 0, consonant = 0;

// for (let i = 0; i < phrase.length; i++) {(
//     phrase[i] = 'a' ? a_vo++ : phrase[i] = 'e' ? e_vo++ : phrase[i] = 'i' ? i_vo++ : phrase[i] = 'o' ? o_vo++ : phrase[i] = 'u' ? u_vo++ : consonant++)
// }

// parent.innerHTML = 'There are ' + a_vo + 'in this phrase.';
// parent.innerHTML = 'There are ' + e_vo + 'in this phrase.';
// parent.innerHTML = 'There are ' + i_vo + 'in this phrase.';
// parent.innerHTML = 'There are ' + o_vo + 'in this phrase.';
// parent.innerHTML = 'There are ' + u_vo + 'in this phrase.';
// parent.innerHTML = 'And there are ' + consonantTimes + '\'s in this phrase.';