function greet(){

    let name = prompt("What's you name, friend?", "Name");

        if(name != null){
            document.getElementById("message").innerHTML = "Hello my dear " + name + ". I hope you are well.";
        }
}