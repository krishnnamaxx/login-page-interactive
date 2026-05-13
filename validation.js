const form = document.getElementById('form');
const firstname_input=document.getElementById('firstname-input');
const email_input=document.getElementById('email-input');
const password_input=document.getElementById('password-input');
const repeat_password_input=document.getElementById('repeat-password-input');


form.addEventListener('submit',(e)=>{
    // e.preventDefault();  //preventing the default behaviour of form submission 

    let errors=[];
    if(firstname_input){

        //if we have firstname input then we are on a signup page
        errors=getSignUpFormErrors(firstname_input.value,email_input.value,password_input.value,repeat_password_input.value);
    }
    else{

        //if we dont have firstname input then we are on a login page
        errors=getLoginFormErrors(email_input.value,password_input.value);

    }

    if(errors.length>0){
        e.preventDefault();
    }
});

function getSignUpFormErrors(firstname,email,password,repeat_password){
let errors=[];
if(firstname==='' || firstname===null){
    errors.push('First name is required');
    firstname_input.parentElement.classList.add('incorrect');
}

if(email==='' || email===null){
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
}


if(password==='' || password===null){
    errors.push('password is required');
    password_input.parentElement.classList.add('incorrect');
}
return errors;
}


