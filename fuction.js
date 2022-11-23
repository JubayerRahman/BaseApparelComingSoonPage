const form = document.getElementById('form')
const email = document.getElementById('email').value;
const errorText = document.getElementById('errorText')
const errorIcon = document.querySelector('i');

form.addEventListener('submit',(e)=>{
    const errMessage =[];
    if(email === ""){
        errMessage.push("please Provide a valid email")
    }
    if(errMessage.length>0){
        e.preventDefault();
        errorText.innerHTML = errMessage;
        errorIcon.classList.toggle('fa-circle-exclamation')
    }
    else{
        errorText.innerHTML ="email seved"
    }
})