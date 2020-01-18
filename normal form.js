
function show()
{
	
	var name = document.getElementById("name").value;
	var address= document.getElementById("address").value;
	var bloodgroup = document.getElementById("bloodgroup").value;
	var api= "https://y6hbvgcwbc.execute-api.us-east-1.amazonaws.com/dev/CRUD/create"
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

	       alert(xhttp.responseText);
	    }
	};

	xhttp.open("POST", api, false);
	xhttp.send(JSON.stringify(params));


	//xhttp.open("POST", "https://x77gyktk3l.execute-api.us-east-1.amazonaws.com/PROD/resource1", true);
	//xhttp.open("POST", "https://x77gyktk3l.execute-api.us-east-1.amazonaws.com/PROD/resource1", true);
	


}

// function viewData()
// {

// 	var api= "https://rfblcozwk9.execute-api.us-east-1.amazonaws.com/PROD/read"
// 	var xmlhttp = new XMLHttpRequest();
	
	

// 	xmlhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Typical action to  performed when the document is ready:
// 			//console.log(xhttp.responseText);
// 			var data = JSON.parse(xmlhttp.responseText);
// 			console.log(data);
// 		    document.getElementById('sesData').innerHTML = data;
// 		    }
// 		};

// 	xmlhttp.open("POST", api, false);
// 	xmlhttp.send();
// }

// function deleteData()
// {
// 	var id = document.getElementById("Id").value;
// 	var api= "https://rfblcozwk9.execute-api.us-east-1.amazonaws.com/PROD/delete"
// 	var params = {
// 		"Id":id
// 	}
// 	var xmlhttp = new XMLHttpRequest();

// 	xmlhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Typical action to  performed when the document is ready:
// 			//console.log(xhttp.responseText);
			
// 			console.log(xmlhttp.responseText);
		    
// 		    }
// 		};

// 	xmlhttp.open("POST", api, false);
// 	xmlhttp.send(JSON.stringify(params));
// }


// function update()
// {
// 	var name = document.getElementById("name").value;
// 	var address= document.getElementById("address").value;
// 	var bloodgroup = document.getElementById("bloodgroup").value;
// 	var id = document.getElementById("Id").value;
// 	var api= "https://rfblcozwk9.execute-api.us-east-1.amazonaws.com/PROD/update"

// 	var params = {

// 		"name":name,
// 		"address":address,
// 		"bloodgroup":bloodgroup,
// 		"Id":id
// 		//"password":password
// 	}
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
	   	 
// 	   	 if (this.readyState == 4 && this.status == 200) {
// 	       // Typical action to  performed when the document is ready:
// 	       console.log(xhttp.responseText);

// 	       alert(xhttp.responseText);
// 	    }
// 	};
// 	xhttp.open("POST", api, false);
// 	xhttp.send(JSON.stringify(params));
// }