var homeButton = document.getElementById("home");

var doSomethingHome = function(){
	document.location.href = "index.html"; 
	console.log("go back to home page");
};

homeButton.addEventListener("click", doSomethingHome);

//select for the button
var animationButton = document.getElementById("animation");

//definei a function to call
var doSomethingAnimation = function(){
	document.location.href = "https://russell-c.github.io/memories/index.html"; 
}

//when the button is clicked, do the function
animationButton.addEventListener("click", doSomethingAnimation);

