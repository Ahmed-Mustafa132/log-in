const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const forgotPasswordLink = document.getElementById("forgot-password-link");
const registerLink = document.getElementById("register-link");
const loginLink = document.getElementById("login-link");

forgotPasswordLink.addEventListener("click", function(event){
	event.preventDefault();
	alert("Forgot Password Clicked!");
});

registerLink.addEventListener("click", function(event){
	event.preventDefault();
	loginForm.style.display = "none";
	registerForm.style.display = "block";
});

loginLink.addEventListener
