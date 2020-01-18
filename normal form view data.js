
function show()
{
	
	var name = document.getElementById("name").value;
	var address= document.getElementById("address").value;
	var bloodgroup = document.getElementById("bloodgroup").value;
	var api= "https://rfblcozwk9.execute-api.us-east-1.amazonaws.com/PROD/read"
	//var password=document.getElementById("password").value;
	//var Id=document.getElementById("Id").value;
	//var sub = document.getElementById("submit").value;
	//var  del = document.getElementById("delete").value;

	//console.log(sub);

	var params = {

		"name":name,
		"address":address,
		"bloodgroup":bloodgroup
		//"Id":Id,
		//"password":password
	}
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	   	 if (this.readyState == 4 && this.status == 200) {
	       // Typical action to  performed when the document is ready:
	       console.log(xhttp.responseText);
	       var data = JSON.parse(xhttp.responseText);
	       console.log(data);
	       document.getElementById('sesData').innerHTML = data;
		   //alert(data);
	       //alert(xhttp.responseText);
	    }
	};

	xhttp.open("POST", api, false);
	xhttp.send(JSON.stringify(params));


	//xhttp.open("POST", "https://x77gyktk3l.execute-api.us-east-1.amazonaws.com/PROD/resource1", true);
	//xhttp.open("POST", "https://x77gyktk3l.execute-api.us-east-1.amazonaws.com/PROD/resource1", true);
	


}