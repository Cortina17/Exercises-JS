const parent = document.getElementById('container');

export function compare(){

    let first = document.getElementById('first').value;
    let numb1 = Number(first);

    let second = document.getElementById('second').value;
    let numb2 = Number(second);

    let third = document.getElementById('third').value;
    let numb3 = Number(third);

    let result = document.createElement('p');

    let compare = 0;

    let array = [numb1, numb2, numb3];
    
    for (let i = 0; i < array.length; i++) {
        if(compare < array[i]){
            compare = array[i];
        }
    }
    result.innerHTML = compare;
    parent.appendChild(result);
}

// if (numb1 > numb2 && numb1 > numb3){
    //     result.innerHTML = numb1;
    //     parent.appendChild(result);
    // }