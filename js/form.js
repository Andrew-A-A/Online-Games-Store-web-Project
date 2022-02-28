// var myButton = document.getElementById('myButton');
// var   myPass = document.getElementById('myPass');

// var input1 = document.getElementsByClassName("checkps");
// var input2 = document.getElementsByClassName("checkp"); 

     
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
  // function checkPasswords() {
    // var input1 = document.getElementsByClassName("checkps").value;
    // var input2 = document.getElementsByClassName("checkp").value;
    // if (input1.value !== input2.value) {
      // alert("those passwords dont match")
    // } else{
      // alert("welcommme")
    // }
  // }
  function verifyPassword() {  
    var pw = document.getElementById("myInput").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } 
    var input1 = document.getElementById("myInput").value;
    var input2 = document.getElementById("myInputs").value;
    if (input1 != input2) {
      alert("Passwords are not same")
    } else{
      alert("welcommme")
    } 
  }  

  


