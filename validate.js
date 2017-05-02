function formValidate () {
	var fname = document.form.firstName();
	if(fname == "Null" | fname == ""){
		alert("Please Enter First Name");
		fname.focus();
		return false;
	}
	return true;
}
