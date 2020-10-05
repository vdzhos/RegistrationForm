
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmation = document.getElementById("confirmation");
let wrongEmail = document.getElementById("wrong-email");
let wrongPassword = document.getElementById("wrong-password");
let wrongConfirmation = document.getElementById("wrong-confirmation");
let registerBtn = document.getElementById("btn-register");

let passwordConfirmation = function () {
    let pw = password.value;
    let conf = confirmation.value;
    if(pw===conf){
        wrongConfirmation.style.visibility = "hidden";
    }else{
        wrongConfirmation.style.visibility = "visible";
    }
}

email.onchange = function() {
    let regex = /([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.com/;
    let result = email.value.match(regex);
    if(!result){
        wrongEmail.style.visibility = "visible";
    }else{
        wrongEmail.style.visibility = "hidden";
    }
}

password.onchange = function() {
    let pw = password.value;
    passwordConfirmation();
    if(pw.length<8){
        wrongPassword.innerHTML = "Your password must be at least 8 characters long!";
        wrongPassword.style.visibility = "visible";
        return;
    }
    if(pw === pw.toLowerCase()){
        wrongPassword.innerHTML = "Your password must contain at least 1 capital letter!";
        wrongPassword.style.visibility = "visible";
        return;
    }
    if(!/[0-9]/.test(pw)){
        wrongPassword.innerHTML = "Your password must contain at least 1 digit!";
        wrongPassword.style.visibility = "visible";
        return;
    }
    wrongPassword.style.visibility = "hidden";
}

confirmation.onchange = function() {
    passwordConfirmation();
}

registerBtn.onclick = function () {
    if(email.value.length===0 || password.value.length===0 || confirmation.value.length===0){
        alert("Please, complete all fields of the registration form!");
        return;
    }
    if(wrongEmail.style.visibility==="visible" ||
        wrongPassword.style.visibility==="visible" ||
        wrongConfirmation.style.visibility==="visible"){
        alert("Wrong input format!");
        return;
    }
    alert("Congratulations! Registration successful!");
    email.value = "";
}


