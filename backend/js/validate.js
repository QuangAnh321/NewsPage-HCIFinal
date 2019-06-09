function validateEmail() {
    var email = document.forms["add-user"]["email"].value;
    if (email == "") {
   	document.getElementById("Email").style.color = "#FF0000"
  	document.getElementById("Email").innerHTML = "Please Enter Your Email!";
    return false;
  }else{
  	document.getElementById("Email").innerHTML = "";
    document.getElementById("confirm").innerHTML = "Success";
    document.getElementById("confirm").style.backgroundColor = "#d3f794"
    document.getElementById("confirm").style.color = "#4CAF50"
    document.getElementById("confirm").style.border = "1px solid #4CAF50"
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
    document.getElementById("confirm").innerHTML = "Success";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
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
    document.getElementById("confirm").innerHTML = "Success";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
  	return true;
	}
}