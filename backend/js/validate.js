function checkEmail() {
	var $email = $('form input[name="email'); //change form to id or containment selector
	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	if ($email.val() == '' || !re.test($email.val()))
	{
    	document.getElementById("email").style.border = "1px solid #4CAF50"
    	return false;
	}
}