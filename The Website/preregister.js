document.getElementById("form-register").addEventListener("submit", (event)=>
{
    event.preventDefault(); // supaya ngga ke submit

    let email = document.getElementById("email")
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let birthday = document.getElementById("birthday")
    let nationality = document.getElementById("nationality")

    let error_email = document.getElementById("error-email")
    if(!validateEmail(email.value))
    {
        error_email.innerHTML = "Email must contain at least an @ and ends with .com"
        // error_email.innerHTML = validateEmail(email.value);
        return;
    }
    else if(validateEmail(email.value))
    {
        error_email.innerHTML = ""
    }

    let error_username= document.getElementById("error-username")
    if(username.value.length < 6)
    {
        error_username.innerHTML = "username length must longer or equal to 6 letter"
        return;
    }
    else if(username.value.length >= 6)
    {
        error_username.innerHTML = ""
    }

    let error_Password = document.getElementById("error-password");
    let validatePasswordResult = validatePassword(password.value);
    if(!validatePasswordResult)
    {
        //console.log("Password lenght must be at least 8 characters and contain at least 1 alphabet and 1 number")
        error_Password.innerHTML = "Password lenght must be at least 8 characters and contain at least 1 alphabet and 1 number";
        return;
    }
    else if(validatePasswordResult)
    {
        //console.log("final result true")
        error_Password.innerHTML = "";
    }

    let error_birthday = document.getElementById("error-birthday")
    //let validatBirthdayResult = validateBirthday(birthday.value)
    //console.log("birthday")
    //console.log(birthday.value)
    if(birthday.value.length == 0)
    {
        error_birthday.innerHTML = "Please enter your birthday"
        return;
    }
    else
    {
        error_birthday.innerHTML = ""
    }

    let error_nationality = document.getElementById("error-nationality")
    console.log(nationality.value.length)
    if(nationality.value.length == 0)
    {
        error_nationality.innerHTML = "Please enter your nationality"
        return;
    }
    else
    {
        error_nationality.innerHTML = ""
    }

    let error_checkbox = document.getElementById("error-checkbox")
    if(document.getElementById("checkbox").checked)
    {
        error_checkbox.innerHTML = "";
    }
    else
    {
        error_checkbox.innerHTML = "You must agree with term and condition";
        return;
    }

    //console.log("test");
    //console.log(confirm("apakah anda yakin"))
});

validateEmail = (email) => 
{
    return email.indexOf("@") != -1 && email.endsWith(".com") == true;
}


isNum = (character) =>
{
    return character >= 48 && character <=57;
}

isAlpha = (character) =>
{
    let a = "a".charCodeAt(0);
    let z = "z".charCodeAt(0);
    let A = "A".charCodeAt(0);
    let Z = "Z".charCodeAt(0);
    return (character >= a && character <= z) || (character >= A && character <= Z)
}

validatePassword = (password)=>
{
    let length = password.length;
    let alpha = 0
    let numeric = 0
    for(let i=0; i<length; i++)
    {
        let charCode = password.charCodeAt(i)
        if(isNum(charCode))
        {
            numeric++;
        }
        if(isAlpha(charCode))
        {
            alpha++;
        }
    }

    if(alpha >=1 && numeric >=1 && length >=8)
    {
        return true
    }
    else
    {
        return false
    }
}