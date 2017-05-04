function formValidation() {
// Make quick references to our fields.
var firstname = document.getElementById('firstname');
var addr = document.getElementById('addr');
var zip = document.getElementById('zip');
var state = document.getElementById('state');
var username = document.getElementById('username');
var email = document.getElementById('email');
// To check empty form fields.
if (firstname.value.length == 0) {
document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
firstname.focus();
return false;
}
// Check each input in the order that it appears in the form.
if (inputAlphabet(firstname, "* For your name please use alphabets only *")) {
	if (lengthDefine(username, 6, 8)) {
		if (emailValidation(email, "* Please enter a valid email address *")) {
			if (trueSelection(state, "* Please Choose any one option")) {
				if (textAlphanumeric(addr, "* For Address please use numbers and letters *")) {
					if (textNumeric(zip, "* Please enter a valid zip code *")) {
						return true;
					}
				}
			}
		}
	}
}
return false;
}
// Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) {
	var numericExpression = /^[0-9]+$/;
	if (inputtext.value.match(numericExpression)) {
		return true;
	} else {
document.getElementById('p6').innerText = alertMsg; // This segment displays the validation rule for zip.
inputtext.focus();
return false;
}
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
		return true;
	} else {
document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
//alert(alertMsg);
inputtext.focus();
return false;
}
}
// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) {
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
		return true;
	} else {
document.getElementById('p5').innerText = alertMsg; // This segment displays the validation rule for address.
inputtext.focus();
return false;
}
}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
	var uInput = inputtext.value;
	if (uInput.length >= min && uInput.length <= max) {
		return true;
	} else {
document.getElementById('p2').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
inputtext.focus();
return false;
}
}
// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function trueSelection(inputtext, alertMsg) {
	if (inputtext.value == "Please Choose") {
document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for selection.
inputtext.focus();
return false;
} else {
	return true;
}
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) {
	var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
	if (inputtext.value.match(emailExp)) {
		return true;
	} else {
document.getElementById('p3').innerText = alertMsg; // This segment displays the validation rule for email.
inputtext.focus();
return false;
}
}



/*===================================================================*/
function formValidation()  
{  
	var uid = document.registration.userid;  
	var passid = document.registration.passid;  
	var uname = document.registration.username;  
	var uadd = document.registration.address;  
	var ucountry = document.registration.country;  
	var uzip = document.registration.zip;  
	var uemail = document.registration.email;  
	var umsex = document.registration.msex;  
	var ufsex = document.registration.fsex; 

	if(userid_validation(uid,5,12))  
	{  
		if(passid_validation(passid,7,12))  
		{  
			if(allLetter(uname))  
			{  
				if(alphanumeric(uadd))  
				{   
					if(countryselect(ucountry))  
					{  
						if(allnumeric(uzip))  
						{  
							if(ValidateEmail(uemail))  
							{  
								if(validsex(umsex,ufsex))  
								{  
								}  
							}   
						}  
					}   
				}  
			}  
		}  
	}  
	return false;  

} function userid_validation(uid,mx,my)  
{  
	var uid_len = uid.value.length;  
	if (uid_len == 0 || uid_len >= my || uid_len < mx)  
	{  
		alert("User Id should not be empty / length be between "+mx+" to "+my);  
		uid.focus();  
		return false;  
	}  
	return true;  
}  
function passid_validation(passid,mx,my) {  
	var passid_len = passid.value.length;  
	if (passid_len == 0 ||passid_len >= my || passid_len < mx) {  
		alert("Password should not be empty / length be between "+mx+" to "+my);  
		passid.focus();  
		return false;  
	}  
	return true;  
}  
function allLetter(uname)  
{   
	var letters = /^[A-Za-z]+$/;  
	if(uname.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert('Username must have alphabet characters only');  
		uname.focus();  
		return false;  
	}  
}  
function alphanumeric(uadd)  
{   
	var letters = /^[0-9a-zA-Z]+$/;  
	if(uadd.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert('User address must have alphanumeric characters only');  
		uadd.focus();  
		return false;  
	}  
}  
function countryselect(ucountry)  
{  
	if(ucountry.value == "Default")  
	{  
		alert('Select your country from the list');  
		ucountry.focus();  
		return false;  
	}  
	else  
	{  
		return true;  
	}  
}  
function allnumeric(uzip)  
{   
	var numbers = /^[0-9]+$/;  
	if(uzip.value.match(numbers))  
	{  
		return true;  
	}  
	else  
	{  
		alert('ZIP code must have numeric characters only');  
		uzip.focus();  
		return false;  
	}  
}  
function ValidateEmail(uemail)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{  
		return true;  
	}  
	else  
	{  
		alert("You have entered an invalid email address!");  
		uemail.focus();  
		return false;  
	}  
} 
function validsex(umsex,ufsex) {  
	x=0;  
	if(umsex.checked) {  
		x++;  
	} 
	if(ufsex.checked) {  
		x++;   
	}  
	if(x==0) {  
		alert('Select Male/Female');  
		umsex.focus();  
		return false;  
	} else {  
		alert('Form Succesfully Submitted');  
		window.location.reload()  
		return true;  
	}  
}