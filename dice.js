$("button").on("click",function(){
	var randomnumber= Math.floor(Math.random()*6+1);

var randomsource= "images/dice" + randomnumber+".png" ;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomsource);
//
var randomnumber2= Math.floor(Math.random()*6+1);
var randomimage2= randomnumber2+".png";
var randomsource2= "images/dice" + randomimage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomsource2);

//

	if (randomnumber>randomnumber2)
	{ document.querySelector("h1").innerHTML="Player 1   winzz! 🥳 ";}
	else {
		if(randomnumber2>randomnumber){
			document.querySelector("h1").innerHTML="Player 2 winzz! 🥳 ";}
			else { document.querySelector("h1").innerHTML="it's a Draw!🤜🤛";}
	}
$("img").fadeOut().fadeIn();
//document.querySelector("h3").innerHTML="Reload the page to play again.";
});
