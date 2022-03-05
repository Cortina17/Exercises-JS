export function manyDivisors(){
    let number = document.getElementById("input-txt").value

    result.innerHTML = 
    
    number % 2 == 0 &&
    number % 3 == 0 &&
    number % 5 == 0 ?
    "Divisible by 2, 3 and 5." :
    number % 2 == 0 && 
    number % 3 == 0 && 
    number % 7 == 0 ? 
    "Divisible by 2, 3 and 7." : 
    number % 3 == 0 &&
    number % 5 == 0 &&
    number % 7 == 0 ?
    "Divisible by 3, 5 and 7." :
    number % 2 == 0 && 
    number % 3 == 0 ?
    "Divisible by 2 and 3." :
    number % 2 == 0 &&
    number % 5 == 0 ? 
    "Divisible by 2 and 5." : 
    number % 2 == 0 && 
    number % 7 == 0 ? 
    "Divisible by 2 and 7." : 
    number % 3 == 0 && 
    number % 5 == 0 ? 
    "Divisible by 3 and 5." : 
    number % 3 == 0 && 
    number % 7 == 0 ? 
    "Divisible by 3 and 7." : 
    number % 5 == 0 && 
    number % 7 == 0 ? 
    "Divisible by 5 and 7." : 
    number % 2 == 0 && 
    number % 3 == 0 ?
    "Divisible by 2 and 3." : 
    number % 7 == 0 ?
    "Divisible by 7." :
    number % 5 == 0 ? 
    "Divisible by 5." : 
    number % 3 == 0 ? 
    "Divisible by 3." : 
    number % 2 == 0 ? 
    "Divisible by 2." : "Not divisible by 2, 3, 5 or 7."
}