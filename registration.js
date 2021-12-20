let email_v = '@';
let username_v = /^[a-zA-Z0-9_-]+$/;
let password_v = /^(\S*)?\d+(\S*)?$/;


submit.onclick=function(){
	document.getElementById("errorname").innerHTML= "";
	document.getElementById("errorusername").innerHTML= "";
	document.getElementById("erroremail").innerHTML= "";
	document.getElementById("errorsurname").innerHTML= "";
	document.getElementById("errorrepassword").innerHTML= "";
	document.getElementById("errorpassword").innerHTML= "";
	let submit=document.getElementById('submit');
	let name=document.getElementById('name');
	let surname=document.getElementById('surname');
	let username=document.getElementById('username');
	let password=document.getElementById('password');
	let repassword=document.getElementById('repassword');
	let email=document.getElementById('email');
	let a=1;
	if(name.value.length<2)
	{
		document.getElementById('errorname').innerHTML="Please enter the correct information";
		a=0;
	}
	if(surname.value.length<2)
	{
		document.getElementById('errorsurname').innerHTML="Please enter the correct information";
		a=0;
	}
	if(username.value.length<4)
	{
		document.getElementById('errorusername').innerHTML="Please enter the correct information";
		a=0;
	}
	if( password.value.length<8)
	{
		document.getElementById('errorpassword').innerHTML="Please enter 8 characters or more";
		a=0;
	}
	if(repassword.value.length<8)
	{
		document.getElementById('errorrepassword').innerHTML="Invalid repassword";
		a=0;
	}
	if(!email.value.includes('@') )
	{
		document.getElementById('erroremail').innerHTML="Please enter the correct information";
		a=0;
	}
	if(a==1) {
		console.log('ura ura ura')
		localStorage.setItem('name', name.value);
		localStorage.setItem('surname', surname.value);
		localStorage.setItem('password', password.value);
		localStorage.setItem('username', username.value);
		localStorage.setItem('email', email.value);
		window.location.href = "main.html";
	}

}
