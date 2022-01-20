export function countVowels(){

    let string = document.getElementById('text-input').value;

    if (string.match(/[a|e|i|o|u]/gi)){

        result.innerHTML = ((string.match(/[a|e|i|o|u]/gi)).length);

    } else {

        result.innerHTML = 'There are no vowels in this phrase!';

    }
}