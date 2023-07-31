var ObjPeople = [
    {
        username: "dogu",
        password: "dogu123"
    }
]
function signup(){
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(2, 47, 43),  rgb(50, 115, 255));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";
}


function signup()
{   var registerUser = document.getElementById("newUser").value
   var registerEmail = document.getElementById("newEmail").value
   var registerPassword = document.getElementById("newPassword").value
   var registerConfirm = document.getElementById("newConfirm").value}

   for(i == 0; i <ObjPeople.length; i ++){
    if(registerUser == ObjPeople[i].username){
    alert("this username is already in use")
    return
   }else if (registerPassword.length <8){
    alert("this password is too short, include 8 or more characters")
    return
   }

ObjPeople.push(newUser)
console.log(ObjPeople)}
   
function login(){
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";
}

function login()
{   var username = document.getElementById("username").value
var password = document.getElementById("password").value }
    

    for(i= 0; i <ObjPeople.length; i++) {
        if(username == ObjPeople[i].username && password == ObjPeople[i].password)
        console.log(username + "logged in")
        return
    }

