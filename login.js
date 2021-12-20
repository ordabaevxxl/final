let submit=document.getElementById('submit');


submit.onclick=function() {
	console.log("gggasdsadas");
	let username = document.getElementById('loginer');
	let password = document.getElementById('password');
	let user = localStorage.getItem('email');
	let pass = localStorage.getItem('password');
	if (password.value == pass) {
		console.log("ggg");
		window.location.href = "main.html";


	}
}	