function compare(numb1, numb2, numb3){

    let array = [numb1, numb2, numb3];
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if(result < array[i]){
            result = array[i];
        }
    }

    return result;
}

module.exports = compare;