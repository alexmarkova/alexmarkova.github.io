// Alex's javascript for three link buttons 

// HOME PAGE 

var homeButton = document.getElementById("home");
var doSomethingAbout = function(){

	document.location.href = "index.html"; // that's my link button
	console.log("go back to home page");
};
homeButton.addEventListener("click", doSomethingAbout);

// ABOUT PAGE

var aboutButton = document.getElementById("about");
var doSomethingAbout = function(){

	document.location.href = "about.html"; // that's my link button
};
aboutButton.addEventListener("click", doSomethingAbout);

// CAST PAGE
var castButton = document.getElementById("cast");
var doSomething = function(){	
	 document.location.href = "cast.html";
};
castButton.addEventListener("click", doSomething);


 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('div.video-container').offset().top }, 'slow');
      return false;
    });
  });
