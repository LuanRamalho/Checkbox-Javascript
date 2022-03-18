function isChecked(){
    if(document.getElementById("my-checkbox").checked){
        document.getElementById("message").textContent = "Clicado";
    }
    else{
        document.getElementById("message").textContent = "Nao Esta Clicado";
    }
}