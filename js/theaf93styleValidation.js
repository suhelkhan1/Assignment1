'use strict';

var appValidations;

(function() {
	appValidations = {
		initialize: function(event) {
			var _this = this;

			$('#SubmitButton').on('click', function(event) {
				event.preventDefault();
				_this.submitEvent(event);
			});

			$('#dob').on('input', function(event) {
				_this.dobChanged(event);
			});

			var $select = $('#country');
			$.getJSON('js/country.json', function(data) {				
				$select.html("");
				for (var i = 0; i < data['country'].length; i++) {
					$select.append('<option id="' + data['country'][i]['id'] + '">' + data['country'][i]['name'] + '</option');
				};
			});
		},		
		dobChanged: function(event) {
			var date_of_birth = document.form.dateOfBirth.valueAsDate;
			var today = new Date();
			var diff = today.getTime() - date_of_birth.getTime();
			var age = Math.floor(diff/31557600000);
			$('#age').val(age);
		},
		submitEvent: function(event) {
			/**
			 * TODO: Call validation functions here.
			 * */
			 this.validateLastName();
			 this.validateFirstName();
			 this.validatePhoneNumber();
			 this.validateOfficeNumber();
			 this.validateEmail();
			 this.validatePassword();
			 this.validateDateOfBirth();
			 this.validateGender();
			 this.validateInterest();
			 this.validateAbout();
			 this.validateCountry();
			 this.validateUploadFile();
		},
		validateFirstName: function() {
			var first_name = document.form.firstName;

			if (first_name.value && first_name.value.match(/^[a-zA-Z]+$/)) {
				$('#firstName').html('');
			} else{
				first_name.focus();
				$('#firstName').html('aesa kon naam likhta hai bhai');
			};
		},
		validateLastName: function() {
			var last_name = document.form.lastName;

			if (last_name.value && last_name.value.match(/^[a-zA-Z]+$/)) {
				$('#lastName').html('');
			} else{
				last_name.focus();
				$('#lastName').html('Please enter Last Name correctly');
			};
		},
		validatePhoneNumber: function() {
			var phone_number = document.form.phoneNo;

			if (phone_number.value && phone_number.value.match(/^[0-9]+$/)) {
				$('#phoneNo').html('');
			} else{
				phone_number.focus();
				$('#phoneNo').html('Phone Number must have numeric characters only');
			};
		},
		validateOfficeNumber: function() {
			var office_number = document.form.officeNo;

			if (office_number.value && office_number.value.match(/^[0-9]+$/)) {
				$('#officeNo').html('');
			} else{
				office_number.focus();
				$('#officeNo').html('Office Number must have numeric characters only');
			};
		},
		validateEmail: function() {
			var email = document.form.emailInput;

			if (email.value && email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
				$('#emailInput').html('');
			} else{
				email.focus();
				$('#emailInput').html('You have entered an invalid email address');
			};
		},
		validatePassword: function() {
			var password = document.form.passwordInput;

			if (password.value && password.value.match(/s/)) {
				$('#passwordInput').html('');
			} else{
				password.focus();
				$('#passwordInput').html('You have entered an invalid email address');
			};
		},
		validateConfirmPassword: function() {
			var password = document.form.passwordInput;
			var confim_password = document.form.passwordConfirm;

			if (password.value && confim_password.value === password.value) {
				$('#passwordConfirm').html('');
			} else{
				confim_password.focus();
				$('#passwordConfirm').html('Passwords entered does not match');
			};
		},
		validateDateOfBirth: function() {
			var bate_of_birth = document.form.dateOfBirth;
			var date = new Date(bate_of_birth.value);
			var year = date.getFullYear();

			if (!isNaN(year) && year > 1900 && year < 1999) {
				$('#dateOfBirth').html('');
			} else{
				bate_of_birth.focus();
				$('#dateOfBirth').html('Please enter proper Date of Birth');
			};
		},
		validateDateOfBirth: function() {
			var bate_of_birth = document.form.dateOfBirth;
			var date = new Date(bate_of_birth.value);
			var year = date.getFullYear();

			if (!isNaN(year) && year > 1900 && year < 1999) {
				$('#dateOfBirth').html('');
			} else{
				bate_of_birth.focus();
				$('#dateOfBirth').html('Please enter proper Date of Birth');
			};
		},
		validateGender: function() {
			var gender = document.form.gender;
			if (gender[0].checked) {
				$('#gender').html('');
			} else if (gender[1].checked) {
				$('#gender').html('');
			} else{
				gender[0].focus();
				$('#gender').html('Select Male/Female');
			};
		},
		validateInterest: function() {
			var bike = document.form.biking;
			var read = document.form.reading;
			var play = document.form.playing;
			if (bike.checked) {
				$('#interest').html('');
			} else if (read.checked) {
				$('#interest').html('');
			} else if (play.checked) {
				$('#interest').html('');
			} else{
				bike.focus();
				$('#interest').html('Select Any One Interest');
			};
		},
		validateAbout: function() {
			var about_you = document.form.about;

			if (about_you.value && about_you.value.match(/^[a-z0-9][a-z0-9._\--]*$/)) {
				$('#about').html('');
			} else{
				about_you.focus();
				$('#about').html('Please input correctly');
			};
		},
		validateCountry: function () {
			var country = document.form.country;
			var otherCountry = document.form.otherCountry;
			if (country.value == "default"){
				$('#country').html('Please Select country');				
			} else if (country.value == "other") {
				if(/^[a-z0-9][a-z0-9._\-]*$/.exec(otherCountry.value)){
					$('#otherCountry').html('');
				} else {
					$('#otherCountry').html('Mention Country if Selected Other');
				}
			} else {
				$('#country').html('');
			}
		},
		validateUploadFile: function () {
			var upload_file = document.form.uploadFile;
			var allowed_extensions = new Array("jpg","png","gif");
			var file_name = upload_file.value.replace(/^.*[\\\/]/, '')
		    var file_extension = file_name.split('.').pop();

		    if (upload_file.value !== "") {
		    	for(var i = 0; i <= allowed_extensions.length; i++) {
			        if(allowed_extensions[i]==file_extension) {
			            $('#uploadFile').html('');
			            break;
			        } else {
				    	$('#uploadFile').html('Supported file extentions are JPG, PNG, GIF.');
				    }
			    }
		    } else {
		    	$('#uploadFile').html('Please upload file.');
		    }
		}
	}
}());