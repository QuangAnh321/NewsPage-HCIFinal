function addUser() {
  var cf = document.forms["add-user"]["cfpass"].value;
  var password = document.forms["add-user"]["password"].value;
  var email = document.forms["add-user"]["email"].value;
  if(!email==""||!password==""||!cf==""){
     document.getElementById("confirm").innerHTML = "Success";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
      document.getElementById("Email").style.color = ""
      document.getElementById("Email").innerHTML = "";
      document.getElementById("Password").style.color = ""
      document.getElementById("Password").innerHTML = "";
      document.getElementById("cfPass").style.color = ""
      document.getElementById("cfPass").innerHTML = "";
      return true;
  }
  document.getElementById("Email").style.color = "#FF0000"
  document.getElementById("Email").innerHTML = "Please Enter Your Email!";
  document.getElementById("Password").style.color = "#FF0000"
  document.getElementById("Password").innerHTML = "Please Enter Your Password!";
  document.getElementById("cfPass").style.color = "#FF0000"
  document.getElementById("cfPass").innerHTML = "Please Enter Your Password!";
  document.getElementById("confirm").innerHTML = "";
  document.getElementById("confirm").style.backgroundColor = ""
  document.getElementById("confirm").style.color = ""
  document.getElementById("confirm").style.border = ""
  return false;

}

function cancel(){
  var cf = document.forms["add-user"]["cfpass"].value;
  var password = document.forms["add-user"]["password"].value;
  var email = document.forms["add-user"]["email"].value;
  document.getElementById("confirm").innerHTML = "";
  document.getElementById("confirm").style.backgroundColor = ""
  document.getElementById("confirm").style.color = ""
  document.getElementById("confirm").style.border = ""
  document.getElementById("Email").style.color = ""
  document.getElementById("Email").innerHTML = "";
  document.getElementById("Password").style.color = ""
  document.getElementById("Password").innerHTML = "";
  document.getElementById("cfPass").style.color = ""
  document.getElementById("cfPass").innerHTML = "";
  cf = "";
  password ="";
  email = "";
}
     



function deleteFile(){
  document.getElementById("check").style.display = "";

}

function addCat() {
  var cat = document.forms["cat"]["category"].value;
  if(cat == ""){
  document.getElementById("Category").style.color = "#FF0000"
  document.getElementById("Category").innerHTML = "Invalid name!";
  document.getElementById("confirm").innerHTML = "";
      document.getElementById("confirm").style.backgroundColor = ""
      document.getElementById("confirm").style.color = ""
      document.getElementById("confirm").style.border = ""
  return false;
  }
  document.getElementById("confirm").innerHTML = "Success";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
      document.getElementById("Category").style.color = "#"
  document.getElementById("Category").innerHTML = "";
      return true;
}



function addFolder() {
  var folder = document.forms["folder"]["folname"].value;
  if(folder == ""){
  document.getElementById("message").style.color = "#FF0000"
  document.getElementById("message").innerHTML = "Invalid name!";
  document.getElementById("confirm").innerHTML = "";
      document.getElementById("confirm").style.backgroundColor = ""
      document.getElementById("confirm").style.color = ""
      document.getElementById("confirm").style.border = ""
  return false;
  }
  document.getElementById("confirm").innerHTML = "Success";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
      document.getElementById("message").style.color = ""
  document.getElementById("message").innerHTML = "";
      return true;
}

function addFile() {
  var file = document.forms["file"]["fileToUpload"].value;
  if(file == ""){
  document.getElementById("message1").style.color = "#FF0000"
  document.getElementById("message1").innerHTML = "Please Choose A File!";
  document.getElementById("confirm").innerHTML = "";
      document.getElementById("confirm").style.backgroundColor = ""
      document.getElementById("confirm").style.color = ""
      document.getElementById("confirm").style.border = ""
  return false;
  }
  document.getElementById("confirm").innerHTML = "Success";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
      document.getElementById("message1").style.color = ""
  document.getElementById("message1").innerHTML = "";
      return true;
}

function close(){
   
   document.getElementById("message").style.color = ""
  document.getElementById("message").innerHTML = "";
  document.getElementById("message1").style.color = ""
  document.getElementById("message1").innerHTML = "";
}

