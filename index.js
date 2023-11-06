//error catching and submit button function
const inputEmail = document.getElementById('email');
const subscribebtn = document.getElementById('subscribebtn');
const successPage = document.getElementById('successForm');
const successbtn = document.getElementById('successbtn');
const homePage = document.getElementById('homeForm');
const errormessage = document.getElementById('errormessagetext');
const emailName = document.getElementById('email-input-result');

subscribebtn.addEventListener('click', function(e){
    e.preventDefault()

    let chckEmail = inputEmail.value;
    let emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/; //regEx for valid email

    if(emailPattern.test(chckEmail)){
        successPage.classList.remove('hidden');
        homePage.classList.add('hidden');
        emailName.textContent = inputEmail.value;

    }
    else{
        errormessage.textContent = 'Valid email required';
        inputEmail.style.border = "2px solid hsl(4, 100%, 67%)";
        inputEmail.style.color = "hsl(4, 100%, 67%)";
    }
    subscribebtn.addEventListener('blur', () => {
        errormessage.textContent = "";
        inputEmail.style.border = "2px solid hsl(231, 7%, 60%)"
        inputEmail.style.color = "initial";
    });
});

successbtn.addEventListener('click', () => {
    successPage.classList.add('hidden');
    homePage.classList.remove('hidden');
    inputEmail.value = "";
});