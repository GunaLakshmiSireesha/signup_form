var usernameelement=document.getElementById("customername");
usernameelement.addEventListener("blur",checkname);

var emailelement=document.getElementById("usermail");
emailelement.addEventListener("blur",checkemail);

var passwordelement=document.getElementById("userpwd");
passwordelement.addEventListener("blur",checkpwd);

var cpasswordelement=document.getElementById("c_userpwd");
cpasswordelement.addEventListener("blur",check_con_pwd);

var sname=0;
var semail=0;
var spassword=0;
var scpassword=0;

function checkname()
{
    if( (usernameelement.value).length==0)
    {
        document.getElementById("ename").style.display="block";
        document.getElementById("ename").style.color="red";
        document.getElementById("ename").innerHTML="username must be between 3 and 25 characters";
        usernameelement.style.border= "3px solid red";
    }
    else{
        if((usernameelement.value).length>=3 && (usernameelement.value).length<=25)
    {
        document.getElementById("ename").style.display="none";
        usernameelement.style.border= "3px solid green";
        sname=1;
    }
    else{
        document.getElementById("ename").style.display="block";
        document.getElementById("ename").style.color="red";
        document.getElementById("ename").innerHTML="username must be between 3 and 25 characters";
        usernameelement.style.border= "3px solid red";
    }
    }
}

function checkemail()
{
    var id=emailelement.value;
    if (emailelement.value.length<10)
    {
        document.getElementById("eemail").style.display="block";
        document.getElementById("eemail").style.color="red";
        document.getElementById("eemail").innerHTML="email address must contain more then 10 letter or equal to 10 letter";
        emailelement.style.border= "3px solid red";
    }
    else{
    if(id.includes("@gmail.com") || id.includes("@hotmail.com") || id.includes("@outlook.com"))
    {
        document.getElementById("eemail").style.display="none";
        emailelement.style.border= "3px solid green";
        semail=1;
    }
    else{
        document.getElementById("eemail").style.display="block";
        document.getElementById("eemail").style.color="red";
        document.getElementById("eemail").innerHTML="please enter valid email address";
        emailelement.style.border= "3px solid red";
    }
}
}

function checkpwd()
{
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if(passwordelement.value.length==0)
    {
        document.getElementById("epassword").style.display="block";
        document.getElementById("epassword").style.color="red";
        document.getElementById("epassword").innerHTML="password not be empty please enter the password";
        passwordelement.style.border= "3px solid red";
    }
    else{
    if(passwordelement.value.match(paswd)) 
    { 
    document.getElementById("epassword").style.display="none";
    passwordelement.style.border= "3px solid green";
    spassword=1;
    }
    else
    { 
        document.getElementById("epassword").style.display="block";
        document.getElementById("epassword").style.color="red";
        document.getElementById("epassword").innerHTML="password must has at least 8 characters that include al least 1 lowercase <br> charater,  1uppercase charater, 1 number, and 1 special character in (!@#$^%&*)";
        passwordelement.style.border= "3px solid red";
    }
}    
}

function check_con_pwd()
{
    if(passwordelement.value===cpasswordelement.value) 
    { 
    document.getElementById("ecpassword").style.display="none";
    cpasswordelement.style.border= "3px solid green";
    scpassword=1;
    }
    else
    { 
        document.getElementById("ecpassword").style.display="block";
        document.getElementById("ecpassword").style.color="red";
        document.getElementById("ecpassword").innerHTML="Your confirm password is not match with your password";
        cpasswordelement.style.border= "3px solid red";
    }  
}

function successfully(){
    if( sname==1 && semail==1 && spassword==1 && scpassword==1){
    alert("your are successfully Login");
    }
    else{
        alert("please enter all input correctly");
    }
}

function Cancel(){
    alert("your Login is not created");
}