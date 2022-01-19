export function showVowels(){

    let input = document.getElementById('input-text').value;
    let result = document.getElementById('result');

    let str = input.match(/(a|e|i|o|u)/ig);

    result.innerHTML = (str !== null ? str : 'There are no vowels in this phrase!');
}
