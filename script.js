let btnLogin = document.querySelector("#Login");
let btnSignup = document.querySelector("#Signup");

//change signup page in login page
btnLogin.addEventListener("click",function(){
    
    document.querySelector(".Signupimg").style.display="none";
    document.querySelector(".form-container").style.display="none";
    document.querySelector(" .login-form").style.display="block";
    document.querySelector(".Loginimg ").style.display="block";
   
   
  
  
},100);

btnSignup.addEventListener("click",function(){
    
    document.querySelector(".Signupimg").style.display="block";
    document.querySelector(".form-container").style.display="block";
    document.querySelector(" .login-form").style.display="none";
    document.querySelector(".Loginimg ").style.display="none";
   
//    // document.querySelector("#Login").style.backgroundColor="#FFFFFF";
//     document.querySelector("#Login").style.color="black";

},100);



