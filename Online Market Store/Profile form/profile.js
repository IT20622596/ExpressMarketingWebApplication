function checkPassword(){
	if(document.getElementById("pwd").value!=(document.getElementById("cnfrmpwd").value{

       alert ("Password Mismatch");
		return false;
	}
    else{
		alert("Success");
		return true;
	} 	