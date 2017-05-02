function formValidate () {
	var fname = document.form.firstName;
	var lname = document.form.lastName;
	var pno = document.form.phoneNo;
	var ono = document.form.officeNo;
	var uemail = document.form.emailInput;
	var passwd = document.form.passwordInput;
	var cpasswd = document.form.passwordConfirm;
	var dob = document.form.dateOfBirth;

	if(fnameValidate(fname)){
	} else if(lnameValidate(lname)) {
	} else if(Numeric(pno)){
	} else if(Numeric(ono)){
	} else if (validateEmail(uemail)) {
	} else if (validatePassword(passwd,6,12)) {
	} else if (validateConfirmPassword(cpasswd,passwd)) {
	} else if (validateDateOfBirth(dob)){
	}

	function fnameValidate(fname) {		  
		if(/^[a-z0-9][a-z0-9._\-]*$/.exec(fname)) {  
			return true;  
		} else {  
			console.log('First Name should be correctly input');
			fname.focus();  
			return false;  
		}  
	}
	function lnameValidate(lname) {		  
		if(/^[a-z0-9][a-z0-9._\-]*$/.exec(lname)) {  
			return true;  
		} else {  
			console.log('Last Name should be correctly input');  
			lname.focus();  
			return false;  
		}  
	}
	function Numeric(pno) {   
		if(/^[0-9]+$/.exec(pno))  
		{  
			return true;  
		} else {  
			console.log('Phone Number must have numeric characters only');  
			pno.focus();  
			return false;  
		}  
	}
	function Numeric(ono) {   
		if(/^[0-9]+$/.exec(pno))  
		{  
			return true;  
		} else {  
			console.log('Phone Number must have numeric characters only');  
			ono.focus();  
			return false;  
		}  
	}
	function validateEmail(uemail) {  
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
		if(mailformat.exec(uemail)) {  
			return true;  
		} else {  
			console.log("You have entered an invalid email address!");  
			uemail.focus();
			return false;  
		}
	}
	function validatePassword(passwd,min,max) {  
		var passwd_len = passwd.value.length;  
		if (passwd_len == 0 ||passwd_len >= max || passwd_len < min) {  
			console.log("Password should not be empty or length should be between "+min+" to "+max);  
			passwd.focus();  
			return false;  
		}  
		return true;  
	}
	function validateConfirmPassword (cpasswd, passwd){
		if (cpasswd === passwd) {
			console.log("Passwords matched");
			return true;
		} else {
			console.log("Passwords entered does not match");
			return false;
		}
	}
	function validateDateOfBirth (dob){
		var date = new Date(dob.value);
		var year = date.getFullYear();
		if (year > 2000 || year == null) {
			console.log("The age should be grater than 18");
			return false;
		} else {
			return true;
		}
	}
}
