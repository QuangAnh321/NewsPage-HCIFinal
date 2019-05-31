function confirmDelete() {
	var text;
	var c = confirm('Are you sure you want to Delete this item?');
	if (c == true) {
    	text = "Delete Complete!";
    	document.getElementById("confirm").innerHTML = text;
  		document.getElementById("confirm").style.backgroundColor = "#d3f794"
  		document.getElementById("confirm").style.color = "#4CAF50"
  		document.getElementById("confirm").style.border = "1px solid #4CAF50"
  	}

}



