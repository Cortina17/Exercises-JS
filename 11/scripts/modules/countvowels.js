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
        if (phrase[index].match(/[aeiou]/)) {
            switch (phrase[index]) {
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
        } else if (phrase[index].match(/[bcdfghjklmnñpqrstvwxyz]/)) {
            consonants++;
        }
        parent.innerHTML = '<br>In the phrase "' + phrase + ('" there are: <br>' + a + ' a\'s,<br>' + e + ' e\'s,<br>' + i + ' i\'s,<br>' + o + ' o\'s <br> and ' + u + ' u\'s.<br>And there are ' + consonants + ' consonants in that phrase.');
    }
}