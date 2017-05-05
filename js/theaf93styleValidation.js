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

			/*$('input').on('change', function(event) {
				event.preventDefault();
				_this.submitEvent(event);
			});*/

			$('#dateOfBirth').on('input', function(event) {
				_this.dobChanged(event);
			});
	
			$.getJSON('js/country.json', function(data) {
				var $select = $('#country');		
				$select.html("");
				$select.append('<option value="default">Select Country</option');
				for (var i = 0; i < data['country'].length; i++) {
					$select.append('<option value="' + data['country'][i]['id'] + '" id="' + data['country'][i]['id'] + '">' + data['country'][i]['name'] + '</option');
				};
			});

			$('#country').on('input', function(data) {
				$.getJSON('js/country.json', function(data) {
					_this.setState(data);
				});
			});

			$('#state').on('input', function(data) {
				$.getJSON('js/country.json', function(data) {
					_this.setCity(data);
				});
			});
		},
		setState: function(data) {
			for (var i = 0; i < data['country'].length; i++) {
				if ($('#country').val() == data['country'][i]['id']) {
					var $select = $('#state');		
					$select.html("");
					$select.append('<option value="default">Select State</option');
					for (var j = 0; j < data['country'][i]['states'].length; j++) {
						$select.append('<option value="' + data['country'][i]['states'][j]['id'] + '" id="' + data['country'][i]['states'][j]['id'] + '">' + data['country'][i]['states'][j]['name'] + '</option>');
					};
				}
			};
		},
		setCity: function(data) {
			for (var i = 0; i < data['country'].length; i++) {
				for (var j = 0; j < data['country'][i]['states'].length; j++) {
					if ($('#state').val() == data['country'][i]['states'][j]['id']) {
						var $select = $('#city');		
						$select.html("");
						$select.append('<option value="default">Select City</option');
						for (var k = 0; k < data['country'][i]['states'][j]['cities'].length; k++) {
							$select.append('<option>' + data['country'][i]['states'][j]['cities'][k]['name']  + '</option>');
						}
					}
				};
			};
		},
		dobChanged: function(event) {
			var date_of_birth = $('[name = "dateOfBirth"]');
			var today = new Date();
			var diff = today.getTime() - date_of_birth[0].valueAsDate.getTime();;
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
			var first_name = $('#firstName');

			if (first_name.val() && first_name.val().match(/^[a-zA-Z]+$/)) {
				$('#firstNameError').html('');
			} else{
				first_name.focus();
				$('#firstNameError').html('Please enter proper first name.');
			};
		},
		validateLastName: function() {
			var last_name = $('#lastName');

			if (last_name.val() && last_name.val().match(/^[a-zA-Z]+$/)) {
				$('#lastNameError').html('');
			} else{
				last_name.focus();
				$('#lastNameError').html('Please enter proper last name.');
			};
		},
		validatePhoneNumber: function() {
			var phone_number = $('#phoneNo');

			if (phone_number.val() && phone_number.val().match(/\+\d{12}/)) {
				$('#phoneNoError').html('');
			} else{
				phone_number.focus();
				$('#phoneNoError').html('Phone Number must be enter in +911234567890 format');
			};
		},
		validateOfficeNumber: function() {
			var office_number = $('#officeNo');

			if (office_number.val() && office_number.val().match(/\+\d{12}/)) {
				$('#officeNoError').html('');
			} else{
				office_number.focus();
				$('#officeNoError').html('Office Number must be enter in +911234567890 format');
			};
		},
		validateEmail: function() {
			var email = $('#emailInput');

			if (email.val() && email.val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
				$('#emailInputError').html('');
			} else{
				email.focus();
				$('#emailInputError').html('You have entered an invalid email address');
			};
		},
		validatePassword: function() {
			var password = $('#passwordInput');

			if (password.val() && password.val().match(/s/)) {
				$('#passwordInputError').html('');
			} else{
				password.focus();
				$('#passwordInputError').html('You have entered an invalid password');
			};
		},
		validateConfirmPassword: function() {
			var password = $('#passwordInput');
			var confim_password = $('#passwordConfirm');

			if (password.val() && confim_password.val() === password.val()) {
				$('#passwordConfirmError').html('');
			} else{
				confim_password.focus();
				$('#passwordConfirmError').html('Passwords entered does not match');
			};
		},
		validateDateOfBirth: function() {
			var bate_of_birth = $('#dateOfBirth');
			var date = new Date(bate_of_birth.val());
			var year = date.getFullYear();

			if (!isNaN(year) && year > 1900 && year < 1999) {
				$('#dateOfBirthError').html('');
			} else{
				bate_of_birth.focus();
				$('#dateOfBirthError').html('Please enter proper Date of Birth');
			};
		},
		validateDateOfBirth: function() {
			var bate_of_birth = $('#dateOfBirth');
			var date = new Date(bate_of_birth.val());
			var year = date.getFullYear();

			if (!isNaN(year) && year > 1900 && year < 1999) {
				$('#dateOfBirthError').html('');
			} else{
				bate_of_birth.focus();
				$('#dateOfBirthError').html('Please enter proper Date of Birth');
			};
		},
		validateGender: function() {
			var gender = $('[name = "gender"]');
			if (gender[0].checked) {
				$('#genderError').html('');
			} else if (gender[1].checked) {
				$('#genderError').html('');
			} else{
				gender[0].focus();
				$('#genderError').html('Select Male/Female');
			};
		},
		validateInterest: function() {
			var bike = $('#biking');
			var read = $('#reading');
			var play = $('#playing');
			if (bike[0].checked) {
				$('#interestError').html('');
			} else if (read[0].checked) {
				$('#interestError').html('');
			} else if (play[0].checked) {
				$('#interestError').html('');
			} else{
				bike.focus();
				$('#interestError').html('Select Any One Interest');
			};
		},
		validateAbout: function() {
			var about_you = $('#about');

			if (about_you.val() && about_you.val().match(/^[a-z0-9][a-z0-9._\--]*$/)) {
				$('#aboutError').html('');
			} else{
				about_you.focus();
				$('#aboutError').html('Please input correctly');
			};
		},
		validateCountry: function () {
			var country = $('#country');
			var state = $('#state');
			var city = $('#city');
			if (country.val() == "default"){
				$('#countryError').html('Please Select country');				
			} else if (state.val() == "default") {
				$('#stateError').html('Please Select state');
			} else if (city.val() == "default") {
				$('#cityError').html('Please Select city');
			} else {
				$('#countryError').html('');
			}
		},
		validateUploadFile: function () {
			var upload_file = $('#uploadFile');
			var allowed_extensions = new Array("jpg","png","gif");
			var file_name = upload_file.val().replace(/^.*[\\\/]/, '');
		    var file_extension = file_name.split('.').pop();

		    if (upload_file.val() !== "") {
		    	for(var i = 0; i <= allowed_extensions.length; i++) {
			        if(allowed_extensions[i]==file_extension) {
			            $('#uploadFileError').html('');
			            break;
			        } else {
				    	$('#uploadFileError').html('Supported file extentions are JPG, PNG, GIF.');
				    }
			    }
		    } else {
		    	$('#uploadFileError').html('Please upload file.');
		    }
		}
	}
}());