function validateEmail() {
    var email = document.forms["add-user"]["email"].value;
    if (email == "") {
   	document.getElementById("Email").style.color = "#FF0000"
  	document.getElementById("Email").innerHTML = "Please Enter Your Email!";
    return false;
  }else{
  	document.getElementById("Email").innerHTML = "";
  	return true;
  }

}

function validatePassword() {
	var password = document.forms["add-user"]["password"].value;
	if(password == ""){
  	document.getElementById("Password").style.color = "#FF0000"
  	document.getElementById("Password").innerHTML = "Please Enter Your Password!";
  	return false;
	}else{
		document.getElementById("Password").innerHTML = "";
		return true;
	}	
}


function validateCfPass() {
	var cf = document.forms["add-user"]["cfpass"].value;
	if(cf == ""){
  	document.getElementById("cfPass").style.color = "#FF0000"
  	document.getElementById("cfPass").innerHTML = "Please Enter Your Password!";
  	return false;
  }else{
  	document.getElementById("cfPass").innerHTML = "";
  	return true;
	}
}