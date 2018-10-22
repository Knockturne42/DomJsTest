var laDiv = document.getElementById('center');
var lesBoutons = document.getElementsByTagName('button');
var element = document.getElementsByTagName('body')[0];
var liste = document.getElementsByTagName('ul')[0];


function init(laDiv) {
	laDiv.style.backgroundColor = "red";
	laDiv.style.height = "100px";
	laDiv.style.width = "100px";
	laDiv.style.transitionDuration = "2s";
}

init(laDiv);

lesBoutons[0].addEventListener("click", function() {
	if (laDiv){
		laDiv.style.backgroundColor = "yellow";
	}
});
lesBoutons[1].addEventListener("click", function() {
	if (laDiv){
		laDiv.style.backgroundColor = "blue";
	}
});
lesBoutons[2].addEventListener("click", function() {
	if (laDiv){
		laDiv.style.height = "300px";
		laDiv.style.width = "300px";
	}
});
lesBoutons[3].addEventListener("click", function() {
	if (laDiv){
		element.removeChild(laDiv);
		laDiv = false;
	}
});
lesBoutons[4].addEventListener("click", function() {
	if (!laDiv)
	{
		laDiv = document.createElement("div");
		laDiv.setAttribute("id", "center");
		element.insertBefore(laDiv, liste);
	}
	init(laDiv);
});