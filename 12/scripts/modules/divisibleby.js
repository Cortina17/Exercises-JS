export function isDivisible(){
    
    let number = document.getElementById("input-txt").value;

    result.innerHTML = number % 2 == 0 ? "Divisible by 2" :  number % 3 == 0 ? "Divisible by 3" : number % 5 == 0 ? "Divisible by 5" : number % 7 == 0 ? "Divisible by 7" : "Not divisible by 2, 3, 5 or 7";
    
}