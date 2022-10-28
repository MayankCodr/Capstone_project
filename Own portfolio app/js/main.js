function login(){
    window.location.replace("login.html");
}
function register(){
    window.location.replace("register.html");
  
}    

var username = localStorage.getItem("username");

document.getElementById("username").innerHTML = username;


