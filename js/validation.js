function setAge() {
	var date_of_birth = document.form.dateOfBirth.valueAsDate;
	var today = new Date();
	var diff = today.getTime() - date_of_birth.getTime();
	var age = Math.floor(diff/31557600000);
	$('#age').val(age);
}
function formValidate () {
	var fname = document.form.firstName;
	var lname = document.form.lastName;
	var pno = document.form.phoneNo;
	var ono = document.form.officeNo;
	var uemail = document.form.emailInput;
	var passwd = document.form.passwordInput;
	var cpasswd = document.form.passwordConfirm;
	var dob = document.form.dateOfBirth;
	var male = document.form.male;
	var female = document.form.female;
	var bike = document.form.biking;
	var read = document.form.reading;
	var play = document.form.playing;
	var about = document.form.about;
	var country = document.form.country;
	var other = document.form.otherCountry;
	var uploadFile = document.form.uploadFile;

	if (validateUploadFile(uploadFile)){
		if (validateCountry(country, other)) {
			if (validateAbout(about)) {
				if (validateInterest(bike,read,play)) {
					if (validateGender(male,female)) {
						if (validateDateOfBirth(dob)) {
							if (validateConfirmPassword(cpasswd,passwd)) {
								if (validatePassword(passwd,6,12)) {
									if (validateEmail(uemail)) {
										if (validateOfficeNumber(ono)) {
											if (validatePhoneNumber(pno)) {
												if (validateLastName(lname)) {
													if (validateFirstName(fname)) {
														return true;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;										 
}
function validateFirstName(fname) {		  
	if(/^[a-zA-Z]+$/.exec(fname.value)) {    
		/*document.getElementById("firstName").innerHTML = "";*/
		alert('Form Succesfully Submitted');  
		window.location.reload()  
		return true; 
	} else {
		/*document.getElementById("firstName").innerHTML = "Please enter First Name correctly";  */
		alert('First Name should be correctly input');
		fname.focus();  
		return false;  
	}
}
function validateLastName(lname) {		  
	if(/^[a-zA-Z]+$/.exec(lname.value)) {  
		/*document.getElementById("lastName").innerHTML = "";*/
		return true;  
	} else {  
		/*document.getElementById("lastName").innerHTML = "Please enter Last Name correctly";  */
		alert('Last Name should be correctly input');  
		lname.focus();  
		return false;  
	}  
}
function validatePhoneNumber(pno) {   
	if(/^[0-9]+$/.exec(pno.value))  
	{  
		/*document.getElementById("phoneNo").innerHTML = "";*/
		return true;  
	} else {  
		/*document.getElementById("phoneNo").innerHTML = "Phone Number must have numeric characters only";  */
		alert('Phone Number must have numeric characters only');  
		pno.focus();  
		return false;  
	}  
}
function validateOfficeNumber(ono) {   
	if(/^[0-9]+$/.exec(ono.value))  
	{  
		/*document.getElementById("officeNo").innerHTML = "";*/
		return true;  
	} else {  
		/*document.getElementById("officeNo").innerHTML = "Office Number must have numeric characters only";  */
		alert('Office Number must have numeric characters only');  
		ono.focus();  
		return false;  
	}  
}
function validateEmail(uemail) {  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(mailformat.exec(uemail.value)) {  
		/*document.getElementById("emailInput").innerHTML = "";*/
		return true;  
	} else {  
		/*document.getElementById("emailInput").innerHTML = "You have entered an invalid email address";  */
		alert("You have entered an invalid email address!");  
		uemail.focus();
		return false;  
	}
}
function validatePassword(passwd,min,max) {
	if (passwd.value && passwd.length >= min && passwd.length <= max) {
		/*document.getElementById("passwordInput").innerHTML = "";*/
		return true;
	} else{
		/*document.getElementById("passwordInput").innerHTML = "Password should not be empty or length should be between "+min+" to "+max;  */
		alert("Password should not be empty or length should be between "+min+" to "+max);  
		passwd.focus();  
		return false;
	};


}
function validateConfirmPassword (cpasswd, passwd){
	if (passwd.value && cpasswd.value === passwd.value) {
		alert("Passwords matched");
		/*document.getElementById("passwordConfirm").innerHTML = "";*/
		return true;
	} else {
		/*document.getElementById("passwordConfirm").innerHTML = "Passwords entered does not match";  */
		alert("Passwords entered does not match");
		return false;
	}
}
function validateDateOfBirth (dob){
	var date = new Date(dob.value);
	var year = date.getFullYear();
	if (isNaN(year)) {
		/*document.getElementById("dateOfBirth").innerHTML = "Please enter Date";  */
		alert("Please enter Date");
		return false;
	}else if (year > 1999) {
		/*document.getElementById("dateOfBirth").innerHTML = "The age should be grater than 18";  */
		alert("The age should be grater than 18");
		return false;
	} else {
		return true;
	}
}
function validateGender(male,female) {  
	x=0;  
	if(male.checked) {  
		x++;
		/*document.getElementById("gender").innerHTML = "";*/
	} else if(female.checked) {  
		x++;   
		/*document.getElementById("gender").innerHTML = "";*/
	} else if(x==0) {  
		/*document.getElementById("gender").innerHTML = "Select Male/Female";  */
		alert('Select Male/Female');  
		male.focus();  
		return false;  
	} 
}
function validateInterest(bike,read,play) {  
	x=0;  
	if(bike.checked) {  
		x++;
		/*document.getElementById("interest").innerHTML = "";*/
		return true;
	} else if(read.checked) {  
		x++;
		/*document.getElementById("interest").innerHTML = "";*/
		return true;
	} else if (play.checked) {
		x++;
		/*document.getElementById("interest").innerHTML = "";*/
		return true;
	} else if(x==0) {  
		/*document.getElementById("interest").innerHTML = "Select Any One Interest";  */
		alert('Select Any One Interest');  
		bike.focus();  
		return false;  
	} 
}
function validateAbout (about){
	if(/^[a-z0-9][a-z0-9._\-]*$/.exec(about.value)){
		/*document.getElementById("about").innerHTML = "";*/
		return true;
	} else {
		/*document.getElementById("about").innerHTML = "Please Enter about you";  */
		alert("Please Enter about you");
		about.focus();
		return false;
	}
}
function validateCountry(country,other) {  
	if(country.value == "default") {  
		/*document.getElementById("country").innerHTML = "Please select country";  */
		alert('Select your country from the list');  
		country.focus();  
		return false;  
	} else if (country.value == "other"){
		if(/^[a-z0-9][a-z0-9._\-]*$/.exec(other.value)){
			/*document.getElementById("otherCountry").innerHTML = "";*/
			return true;
		} else{
			/*document.getElementById("otherCountry").innerHTML = "Mention Country if Selected Other";  */
			alert("Mention Country if Selected Other");
			other.focus();
			return false;
		}
	} else {  
		return true;  
	}  
}
function validateUploadFile(uploadFile) {
	var allowed_extensions = new Array("jpg","png","gif");
	var file_name = uploadFile.value.replace(/^.*[\\\/]/, '')
	var file_extension = file_name.split('.').pop();

	if (uploadFile.value !== "") {
		for(var i = 0; i <= allowed_extensions.length; i++) {
	        if(allowed_extensions[i]==file_extension) {
	        	/*document.getElementById("uploadFile").innerHTML = "";*/
	        	alert("file uploaded Succesfully");	         	        
				return true;  	            
	        } else {
		    	/*document.getElementById("uploadFile").innerHTML ="Supported file extentions are JPG, PNG, GIF.";*/
		    	alert("Supported file extentions are JPG, PNG, GIF.");
		    }
	    }
	} else {
		/*document.getElementById("uploadFile").innerHTML ="Please upload file.";*/
		alert("Please upload file.");
	}
}