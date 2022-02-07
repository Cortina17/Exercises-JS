export function showGrade(){
    
    let n = document.getElementById('input-text').value;

    let num = Math.floor(n)

    if(num >= 9){
        result.innerHTML = 'Outstanding';
    } else if(num < 9 && num >= 7){
        result.innerHTML = 'Remarkable';
    } else if(num < 7 && num >= 5){
        result.innerHTML = 'Suficient';
    }else if(num < 5 && num >= 3){
        result.innerHTML = 'Insuficient';
    } else if(num < 3 && num >= 0){
        result.innerHTML = 'Too poor';
    }

}