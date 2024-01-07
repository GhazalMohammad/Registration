
var loginGroup = document.querySelector("#loginGroup");
var signupGroup = document.querySelector("#signupGroup");
var sign = document.querySelector('#sign');
var inputName = document.getElementById('signupName');
var inputEmail = document.getElementById('signupEmail');
var inputPassword = document.getElementById('signupPassword');
var exist = document.getElementById('exist');
var signBtn = document.querySelector('#signBtn');
var login = document.getElementById('login');
var welcame = document.getElementById('Welcame');
var inValid =document.getElementById("inValid");
var btnLogIn =document.getElementById("logBtn");


// ------------------------------------------
// Event sign
sign.addEventListener('click', function (eventInfo) {
    loginGroup.style.display = 'none';
    signupGroup.style.display = 'block';
});
// ------------------------------------------
signBtn.addEventListener('click', function(eventInfo) {
    inputSign();
    
})
btnLogIn.addEventListener('click',function(enentInfo){
    loginGroup.style.display = 'block';
    signupGroup.style.display = 'none';
})
// ------------------------------------------
var creat = [];
if (localStorage.getItem("register") !== null) {
    creat = JSON.parse(localStorage.getItem("register"));
}
// -----------------------------------------------
function inputSign(){
if (isAllInputIsValid()){
    var name = inputName.value;
    var email = inputEmail.value;
    var password = inputPassword.value;

    var existingUser = creat.find(user => user.name === name || user.email === email );


    if (existingUser) {
        exist.classList.remove("d-none")
        exist.classList.add("d-block") 
    } else {

        var signUp = {
            name: name,
            email: email,
            password: password,
        };
        creat.push(signUp);
        localStorage.setItem("register", JSON.stringify(creat));
        console.log(creat);
        clrForm();
        
    }
}else{

}
  
}
// ---------------------------------------
// clr
function clrForm(){
    inputName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";
}
// -----------------------------------------
function isAllInputIsValid(){
    if (valdationInputName() && valdationInputEmail() && valdationInputPassowrd()){
        
        return true
    }else{
        return false
    }
}
// ----------------------------------------
// valdation is Name
 function valdationInputName(){
    var valName = /^(?=.*[A-Z]).{1,20}$/;
    if (valName.test(inputName.value)==true){
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")  
        return true
    }else {
        inputName.classList.add("is-invalid")
        inputName.classList.remove("is-valid") 
        return false 
    }
 }
// ----------------------------------------------
// validation is email
function valdationInputEmail(){
    var valName = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (valName.test(inputEmail.value)==true){
        inputEmail.classList.add("is-valid")
        inputEmail.classList.remove("is-invalid")  
        return true
    }else {
        inputEmail.classList.add("is-invalid")
        inputEmail.classList.remove("is-valid") 
        return false
    }
 }
// ----------------------------------------------------
// validatio is passowrd
function valdationInputPassowrd(){
    var valName = /^(?=.*[A-Z])[A-Za-z0-9]{8,}$/;
    if (valName.test(inputPassword.value)==true){
        inputPassword.classList.add("is-valid")
        inputPassword.classList.remove("is-invalid")  
        return true 
    }else {
        inputPassword.classList.add("is-invalid")
        inputPassword.classList.remove("is-valid") 
        return false
    }
 }
// ------------------------------------------------------
var userName = JSON.parse(localStorage.getItem("username"))
function logIn(){
    var signInEmail =document.getElementById("signinEmail");
    var signInPassowrd =document.getElementById("signinPassword");
    for(var i=0;i<creat.length;i++){
        if(creat[i].email.toLowerCase() == signInEmail.value.toLowerCase() && 
            creat[i].password.toLowerCase() == signInPassowrd.value.toLowerCase()){
                userName=creat[i].name
                localStorage.setItem("username",JSON.stringify(userName))
                welcame.classList.add("d-block")
                welcame.classList.remove("d-none")
                loginGroup.style.display = 'none';
                displayWelcom()
                
        }
        else {
            inValid.classList.add("d-block")
            inValid.classList.remove("d-none")
        }
    }
}
function displayWelcom(){
    var welcameUserName=document.getElementById("WelcameUserName");
    welcameUserName.innerText=`${userName}`
}




