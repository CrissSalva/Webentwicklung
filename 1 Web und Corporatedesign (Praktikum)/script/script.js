var passwordOkM;
var emailOk;
var emailFormat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{8,}$/;
var passwordForamt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

checkLogin.addEventListener(oninput, function(){
    if (checkLogin.length > 0) {
        loginOk = true;
    }

    var password = document.getElementsByClassName("password")[0].value.trim();
    if (password.length > 0 && password.search(passwordForamt) > -1  ) {
        passwordOk = true;
    } 

    var email = document.getElementsByClassName("email")[0].value.trim();
    if (email.length > 0 && email.search(emailFormat) > -1) {
        emailOK = true;
    }

    if (!passwordOK && !emailOk) {

        document.getElementsByClassName("login")[0].style="background-color: #ff7f7f";
    }

});

    