var homeButton = document.getElementById("home");
var doSomethingAbout = function(){

	document.location.href = "index.html"; // that's my link button - return to home page
	console.log("go back to home page");
};
homeButton.addEventListener("click", doSomethingAbout);