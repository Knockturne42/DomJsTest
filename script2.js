var laDiv = document.getElementById('center');
var lesBoutons = document.getElementsByTagName('button');
var element = document.getElementsByTagName('body')[0];
var liste = document.getElementsByTagName('ul')[0];
var top = document.getElementById('top');
var bot = document.getElementById('bot');
var square = document.getElementsByClassName('square');

function init(laDiv) {
	laDiv.style.backgroundColor = "white";
	if(laDiv.style.height)
		setTimeout(function(){ laDiv.style.width = "100px"; }, 2000);
	else
		laDiv.style.width = "100px";
	laDiv.style.height = "100px";
	laDiv.style.transitionDuration = "2s";
	if (!square[0])
	{
		for (var i = 0; i < 4; i++) {
			var el = document.createElement("div");
			el.setAttribute("class", "square");
			laDiv.appendChild(el);
		}
	}
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = "red";
	}
	laDiv.addEventListener("mouseover", function(){
		laDiv.style.transform = "rotate(360deg)";
		for (var i = 0; i < square.length; i++) {
			square[i].style.height = "45%";
			square[i].style.width = "45%";
			square[i].style.borderRadius = "50%";
			square[i].style.transitionDuration = "1.5s";
		}
		square[0].style.margin = "0 10% 10% 0";
		square[2].style.margin = "0 10% 0 0";
	})

	laDiv.addEventListener("mouseout", function(){
		laDiv.style.transform = "rotate(0deg)";
		for (var i = 0; i < square.length; i++) {
			square[i].style.height = "50%";
			square[i].style.width = "50%";
			square[i].style.borderRadius = "0%";
			square[i].style.transitionDuration = "1.5s";
		}
		square[0].style.margin = "0";
		square[2].style.margin = "0";
	})
}

init(laDiv);

lesBoutons[0].addEventListener("click", function() {
	if (laDiv){
		for (var i = 0; i < square.length; i++) {
			square[i].style.backgroundColor = "yellow";
		}
	}
});
lesBoutons[1].addEventListener("click", function() {
	if (laDiv){
		for (var i = 0; i < square.length; i++) {
			square[i].style.backgroundColor = "blue";
		}
	}
});
lesBoutons[2].addEventListener("click", function() {
	if (laDiv){
		setTimeout(function(){ laDiv.style.height = "300px"; }, 2000);
		laDiv.style.width = "300px";
	}
});
lesBoutons[3].addEventListener("click", function() {
	if (laDiv){
		var maHeight = parseInt(laDiv.style.height);
		var maWidth = parseInt(laDiv.style.width);

		if(maWidth == 500)
		{
			setTimeout(function(){ laDiv.style.width = "100px"; }, 2000);
			laDiv.style.height = "100px";
		}
		else {
			setTimeout(function(){ laDiv.style.height = (maHeight+50)+"px"; }, 2000);
			laDiv.style.width = (maWidth+50)+"px";
		}
	}
});
lesBoutons[4].addEventListener("click", function() {
	if (laDiv){
		element.removeChild(laDiv);
		laDiv = false;
	}
});
lesBoutons[5].addEventListener("click", function() {
	if (!laDiv)
	{
		laDiv = document.createElement("div");
		laDiv.setAttribute("id", "center");
		element.insertBefore(laDiv, liste);
	}
	init(laDiv);
});