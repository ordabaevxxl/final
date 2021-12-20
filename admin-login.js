console.log("script rabotaet");
let username=document.getElementById('login');
let password=document.getElementById('password');
let button=document.getElementById('button');
let error=document.getElementById('error');
let a="admin";
let p="123456";
let z=true;
button.onclick=function(){
	console.log("button rabotaet");
	if(login.value==a && password.value==p ){
		console.log("red hat");
		window.location.href = "panel.html";
	}
	else{
		document.getElementById('error').innerHTML="Wrong login or password";
	}


	
}