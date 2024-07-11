//your JS code here. If required.

function submitForm() {

	var firstName = document.getElementById("firstName").value
	var lastName = document.getElementById("lastName").value;
	var phNo = document.getElementById("phNo").value;
	var emailId = document.getElementById("emailId").value;

	var alertMsg = "First Name: " + firstName +
		            " Last Name: " + lastName +  
		            " Phone Number: " + phNo +
		            " Email ID: " + emailId +

	alert(alertMsg);
	
	