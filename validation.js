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
        errors=getSignUpErrors(firstname_input.value,email_input.value,password_input.value,repeat_password_input.value);
    }
    else{

        //if we dont have firstname input then we are on a login page
        errors=getLoginErrors(email_input.value,password_input.value);

    }
});

