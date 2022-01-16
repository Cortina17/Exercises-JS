let first = document.getElementById("first").value;
let second = document.getElementById("second").value;

let result = Number.parseFloat(first) + Number.parseFloat(second);

function sum(){
    document.getElementById("message").innerHTML = "The result of the addition is: " + result;
}
