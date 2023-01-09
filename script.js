//Show/Hide Password checkbox
function showPassword(){
    var x = document.getElementById("password");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}

//Show/Hide Confirm Password checkbox
function showPasswordConfirm(){
    var x = document.getElementById("confirm-pass");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}

//Form Validation
function validateForm(){

    //Full Name
    var nm = document.getElementById("name").value;
    if(nm.length < 5){
        window.alert("Full Name can't be less than 5 letters!");
        event.preventDefault();
    }

    //Phone No
    var ph = document.getElementById("phone").value;
    var ph_firstNine = ph.substring(0, ph.length-1); //takes first nine numbers of phone number
    var ph_lastNine = ph.substring(1, ph.length); //takes last nine numbers of phone number
    if(ph_firstNine === "123456789" || ph_lastNine === "123456789"){
        window.alert(ph+" is not a valid Phone Number because it contains '123456789'!");
        event.preventDefault();
    }
    else if(ph < 1000000000 || ph >= 10000000000){
        window.alert("Phone Number must be a 10 digit number!");
        event.preventDefault();
    }

    //Password
    var pass = document.getElementById("password").value;
    if(pass === "password"){
        window.alert("'password' is not a secure password! Please choose a unique password.");
        event.preventDefault();
    }
    else if(pass === nm){
        window.alert("Password can't be the same as user name!");
        event.preventDefault();
    }
    else if(pass.length < 8){
        window.alert("Password can't be less than 8 characters!");
        event.preventDefault();
    }
    
    //Confirm Password
    var pass_conf = document.getElementById("confirm-pass").value;
    if(pass_conf != pass){
        window.alert("'Confirm Password' doesn't match 'Password'. Please check and try again!");
        event.preventDefault();
    }
}
