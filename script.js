var laDiv = document.getElementById('test');
var lesDivs = document.getElementsByClassName('ident');
laDiv.innerHTML = "Hello World";
// laDiv.onclick = divEvent(bool, laDiv);
lesDivs[0].innerHTML = "j'aime le code 1";
lesDivs[1].innerHTML = "j'aime le code 2";
lesDivs[2].innerHTML = "j'aime le code 3";

var array = ["fabou", "fabien", "max"];

console.log(array);
array[3] = "chris";

console.log(array);


laDiv.addEventListener("click", function(){divEvent(laDiv)});
function divEvent(laDiv) {
	if (laDiv.style.backgroundColor == "red" || !laDiv.style.backgroundColor)
	{
		laDiv.style.backgroundColor = "blue";
		laDiv.style.width = "500px";
		laDiv.style.height = "500px";
	}
	else
	{
		laDiv.style.backgroundColor = "red";
		laDiv.style.width = "250px";
		laDiv.style.height = "250px";
	}
}