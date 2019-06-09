function confirmDelete() {
	
		document.getElementById("confirm").innerHTML = "Delete Success";
  		document.getElementById("confirm").style.backgroundColor = "#d3f794"
  		document.getElementById("confirm").style.color = "#4CAF50"
  		document.getElementById("confirm").style.border = "1px solid #4CAF50"
		
}

function cf(){
	document.getElementById("confirm").innerHTML = "Success";
  		document.getElementById("confirm").style.backgroundColor = "#d3f794"
  		document.getElementById("confirm").style.color = "#4CAF50"
  		document.getElementById("confirm").style.border = "1px solid #4CAF50"
}

function publish(){
  document.getElementById("confirm").innerHTML = "A Post Has Been Publised";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
}

function saveDraft() {
  document.getElementById("confirm").innerHTML = "A Post Has Been Saved As Draft";
      document.getElementById("confirm").style.backgroundColor = "#d3f794"
      document.getElementById("confirm").style.color = "#4CAF50"
      document.getElementById("confirm").style.border = "1px solid #4CAF50"
}


function cancel() {
  document.getElementById("confirm").innerHTML = "";
      document.getElementById("confirm").style.backgroundColor = ""
      document.getElementById("confirm").style.color = ""
      document.getElementById("confirm").style.border = ""
}