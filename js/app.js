const form = document.getElementById('form');
const username =document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkinputs();
});



function checkinputs(){
    const usernamevalue  = username.value.trim();
    const emailvalue     = email.value.trim();
    const passwordvalue  = password.value.trim();
    const password2value = password2.value.trim();

    if(usernamevalue === ''){
        seterrorfor(username ,'username cannot be blank');

    }
    else {
        setsuccessfor(username);
    }

    if(emailvalue === ''){
        seterrorfor(email,'emil cannot be blank ');
    }else if (!isEmail(emailvalue)) {
        seterrorfor(email , 'email not valid')
    }else{
        setsuccessfor(email)
    }

    if(passwordvalue === ''){
        seterrorfor(password ,'password cannot be blank');
    }else {
        setsuccessfor(password);
    }
    if(password2value === ''){
        seterrorfor(password2 ,'password cannot be blank');
    }else if (password2value !== passwordvalue) {
        seterrorfor(password2 ,'passwords not match');
    }
    else {
        setsuccessfor(password2);
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function seterrorfor(input ,mes){
    const formc = input.parentElement;
    const smll = formc.querySelector('small');
    smll.innerText = mes;
    formc.className = 'form-control error';
}

function setsuccessfor(input){
    const formc =input.parentElement;
    formc.className = 'form-control success';
}