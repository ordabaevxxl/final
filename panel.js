const standard=document.querySelector('.tools');

	let usernumber=1;
	let registred=1;
	let autorized=1;
	let online=1;

console.log("script workingggggggg");
function home(){
	let surname=localStorage.getItem('surname');
	let name=localStorage.getItem('name');
	let email=localStorage.getItem('email');
	let username=localStorage.getItem('password');
	console.log("function working")
	standard.innerHTML='<center><div class="homebox"><div class="box"><p class="number">'+usernumber+'</p><a class="text">Users<a></div><div class="box"><p class="number">1</p><a class="text">Registered Todayy<a></div><div class="box"><p class="number">1</p><a class="text">Autorized Today<a></div><div class="box"><p class="number-green">'+online+'</p><a class="text">Online<a></div></div></center>';
}
function users(){
	let surname=localStorage.getItem('surname');
	let name=localStorage.getItem('name');
	let email=localStorage.getItem('email');
	let username=localStorage.getItem('username');
	console.log("function working")
	standard.innerHTML='<div class="users"><div class="user-title">User lists</div><div class="user-list"><div class="listsel"><br><input type="checkbox" id="listsel"></div><div class="list">Password<hr>'+username+'</div><div class="list">Name<hr>'+name+'</div><div class="list">Surname<hr>'+surname+'</div><div class="list">Email<hr>'+email+'</div><div><br><center><div class="center"><div class="tol"><input type="checkbox" id="disable"><br></div><div class="tol"><input type="button" id="remove" value="Remove" class="btn" onclick="remove()" ><br></div><div class="tol"><button onclick="edit()" id="edit" class="btn">Edit</button></div><div class="tol"><button onclick="add()" id="add" class="btn">Add User</button></div></center></div></div></div></div>';
}



let check=document.getElementById('listsel');
function remove(){
	let password2=localStorage.getItem('password2');
	let name2=localStorage.getItem('name2');
	let email2=localStorage.getItem('email2');
	let surname2=document.getElementById('surname2');

	let surname=localStorage.getItem('surname');
	let name=localStorage.getItem('name');
	let email=localStorage.getItem('email');
	let username=localStorage.getItem('username');

	console.log("remove working");
	if(listsel.checked){
		usernumber--;
		online--;
		console.log("remove workindsadasdsg");
		localStorage.clear('surname');
		localStorage.clear('name');
		localStorage.clear('email');
		localStorage.clear('username');
		standard.innerHTML='<div class="users"><div class="user-title">User lists</div><div class="user-list"><div class="listsel"><br><input type="checkbox" id="listsel"><br><input type="checkbox" id="add2"></div><div class="list">Password<hr>'+username+'<br>'+password2+'</div><div class="list">Name<hr>'+name+'<br>'+name2+'</div><div class="list">Surname<hr>'+surname+'<br>'+password2+'</div><div class="list">Email<hr>'+email+'<br>'+email2+'</div><div><br><center><div class="center"><div class="tol"><input type="checkbox" id="disable"><br></div><div class="tol"><input type="button" id="remove" value="Remove" class="btn" onclick="remove()" ><br></div><div class="tol"><button onclick="edit()" id="edit" class="btn">Edit</button></div><div class="tol"><button onclick="add()" id="add" class="btn">Add User</button></div></center></div></div></div></div>';

	}
	if(add2.checked){
		usernumber--;
		online--;
		console.log("remove workindsadasdsg");
		localStorage.clear('surname2');
		localStorage.clear('name2');
		localStorage.clear('email2');
		localStorage.clear('password2');
		standard.innerHTML='<div class="users"><div class="user-title">User lists</div><div class="user-list"><div class="listsel"><br><input type="checkbox" id="listsel"><br><input type="checkbox" id="add2"></div><div class="list">Password<hr>'+username+'<br>'+password2+'</div><div class="list">Name<hr>'+name+'<br>'+name2+'</div><div class="list">Surname<hr>'+surname+'<br>'+password2+'</div><div class="list">Email<hr>'+email+'<br>'+email2+'</div><div><br><center><div class="center"><div class="tol"><input type="checkbox" id="disable"><br></div><div class="tol"><input type="button" id="remove" value="Remove" class="btn" onclick="remove()" ><br></div><div class="tol"><button onclick="edit()" id="edit" class="btn">Edit</button></div><div class="tol"><button onclick="add()" id="add" class="btn">Add User</button></div></center></div></div></div></div>';

	}

}
function edit(){
	let surname=localStorage.getItem('surname');
	let name=localStorage.getItem('name');
	let email=localStorage.getItem('email');
	let username=localStorage.getItem('username');
	if(listsel.checked) {
		standard.innerHTML = '<div class="edit"><div class="before"><div class="before-title">Old information<br></div><div id="beforebox"> Password:'+username+'</div><div id="beforebox"> Name:'+name+'</div><div id="beforebox">  Surname:'+surname+'</div><div id="beforebox">  Email:'+email+'</div></div><div class="after"><div class="after-title">New Information<div class="afterbox"><input type="text" id="edit-username"  placeholder="New Username"></div><div class="afterbox"><input type="text" id="edit-name" placeholder="New Name"></div><div class="afterbox"><input type="text" id="edit-surname" placeholder="New Surname"></div><div class="afterbox"><input type="text" id="edit-email" placeholder="New Email"></div><div class="afterbox"><button id="edit-btn" onclick="editbtn()">Edit</button><div></div></div>';
	}
}
function editbtn(){
	let newusername=document.getElementById('edit-username');
	let newname=document.getElementById('edit-name');
	let newsurname=document.getElementById('edit-surname');
	let newemail=document.getElementById('edit-email');
	localStorage.setItem('surname',newusername.value);
	localStorage.setItem('name',newname.value);
	localStorage.setItem('email',newemail.value);
	localStorage.setItem('username', newusername.value);
	let surname=localStorage.getItem('surname');
	let name=localStorage.getItem('name');
	let email=localStorage.getItem('email');
	let username=localStorage.getItem('username');
	standard.innerHTML='<div class="users"><div class="user-title">User lists</div><div class="user-list"><div class="listsel"><br><input type="checkbox" id="listsel"></div><div class="list">Username<hr>'+username+'</div><div class="list">Name<hr>'+name+'</div><div class="list">Surname<hr>'+surname+'</div><div class="list">Email<hr>'+email+'</div><div><br><center><div class="center"><div class="tol"><input type="checkbox" id="disable"><br></div><div class="tol"><input type="button" id="remove" value="Remove" class="btn" onclick="remove()" ><br></div><div class="tol"><button onclick="edit()" id="edit" class="btn">Edit</button></div></center></div></div></div></div>';

}
function add(){
	standard.innerHTML='<div class="addc"><div class"addctitle">ADD NEW USER</div><div class="addcbox"><input type="text" placeholder="Enter password" id="addpassword"></div><div class="addcbox"><input type="text" placeholder="Enter Name" id="addname"></div><div class="addcbox"><input type="text" placeholder="Enter Surname" id="addsurname"></div><div class="addcbox"><input type="text" placeholder="Enter E-mail" id="addemail"></div><div class="addcbox"><input type="button" value="ADD" id="addbutton" onclick="addbutton()"></div></div>';

}
function addbutton(){
	let surname=localStorage.getItem('surname');
	let name=localStorage.getItem('name');
	let email=localStorage.getItem('email');
	let username=localStorage.getItem('username');
	let addpassword=document.getElementById('addpassword');
	let addname=document.getElementById('addname');
	let addsurname=document.getElementById('addsurname');
	let addemail=document.getElementById('addemail');

	localStorage.setItem('password2',addpassword.value);
	localStorage.setItem('name2',addname.value);
	localStorage.setItem('email2',addemail.value);
	localStorage.setItem('surname2', addsurname.value);

	let password2=localStorage.getItem('password2');
	let name2=localStorage.getItem('name2');
	let email2=localStorage.getItem('email2');
	let surname2=document.getElementById('surname2');

	usernumber++;
	registred++;
	online++;
	standard.innerHTML='<div class="users"><div class="user-title">User lists</div><div class="user-list"><div class="listsel"><br><input type="checkbox" id="listsel"><br><input type="checkbox" id="add2"></div><div class="list">Password<hr>'+username+'<br>'+password2+'</div><div class="list">Name<hr>'+name+'<br>'+name2+'</div><div class="list">Surname<hr>'+surname+'<br>'+password2+'</div><div class="list">Email<hr>'+email+'<br>'+email2+'</div><div><br><center><div class="center"><div class="tol"><input type="checkbox" id="disable"><br></div><div class="tol"><input type="button" id="remove" value="Remove" class="btn" onclick="remove()" ><br></div><div class="tol"><button onclick="edit()" id="edit" class="btn">Edit</button></div><div class="tol"><button onclick="add()" id="add" class="btn">Add User</button></div></center></div></div></div></div>';
}
