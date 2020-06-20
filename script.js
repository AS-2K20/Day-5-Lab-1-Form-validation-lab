// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var button1 = document.getElementById('submit');
button1.addEventListener("click",function checkUserName(){

    var username = document.getElementById('usertext').value;
    var space = username.split(' ').length;
        
    if (username === "" || username.length<8 || username.length>15 || space!=1 || username.match(/[^\w\.\-]/) !=null ){
        console.log("false");
        return false;
    }       
    
    else{
        console.log("true");
        return true;
    }

});

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
button1.addEventListener("click",function checkEmail(){
    var userEmail = document.getElementById('emailtext').value;

    if(userEmail.match(/[^\w\.@]/) !=null || userEmail ===""){
        console.log("false");
        return false;
    }
    else{
        console.log("true");
        return true;
    }

})



// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

button1.addEventListener("click",function checkPassword(){
    var password = document.getElementById('passwordtext').value;  
    var regEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&*()_]).{3,}$/;  
    
    if(password==="" ){
        console.log("password false");
        return false;
    }
    else if((password.match(regEx))){
        console.log("password true");
        return true;
    }
    else{
        console.log("password false");
        return false;
    }
})
