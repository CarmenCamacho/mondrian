/*function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(esta){
	var cambiarColor = getRandomColor();
	esta.style.backgroundColor = cambiarColor;
}*/
var yellow1 = document.getElementById("yellow1");
var yellow2 = document.getElementById("yellow2");
var blue1 = document.getElementById("blue1");
var blue2 = document.getElementById("blue2");
var red1 = document.getElementById("red1");
var red2 = document.getElementById("red2");

window.addEventListener("keydown", pressTecla, true)
window.addEventListener("keyup", noTecla, true)

function amarillo(event){
	if (yellow1.style.backgroundColor = "white"){
		yellow1.style.backgroundColor = "rgb(254, 218, 9)";
		console.log(yellow1.style.backgroundColor)
		console.log(yellow2.style.backgroundColor)
	}  
}

function rojo(event){
    if (red1.style.backgroundColor = "white"){
		red1.style.backgroundColor = "rgb(204, 51, 51)";
		console.log(red1.style.backgroundColor)
		console.log(red2.style.backgroundColor)
	}
}

function azul(event){

}

function pressTecla(event) {
    var x = event.which || event.keyCode;
    var letra = String.fromCharCode(x);
    if (letra == 'A' || letra =='S'){
    	amarillo(event);
    }
    else if (letra == 'D' || letra =='F'){
    	rojo(event) 
    }
    else if (letra == 'G' && letra =='H'){
    	azul(event) 
    }
    
}

function noTecla(event) {
    var x = event.which || event.keyCode;
    var letra = String.fromCharCode(x);
    console.log(letra)
    if (letra == 'A' || letra =='S'){
    	if (yellow1.style.backgroundColor = "#feda09"){
    		yellow1.style.backgroundColor = "white";
    	}
    	else if (yellow2.style.backgroundColor = "#feda09"){
    		yellow1.style.backgroundColor = "white";
    	}
    }
    else if (x != 65){

    }
}

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
}

var map = {68: false, 69: false, 86: false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[68] && map[69] && map[86]) {
            // FIRE EVENT
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});

http://blog.garstasio.com/you-dont-need-jquery/events/




http://stackoverflow.com/questions/1828613/check-if-a-key-is-down

var keyEnum = { W_Key:0, A_Key:1, S_Key:2, D_Key:3 };
var keyArray = new Array(4);

function onKeyDown()
{
    // Detect which key was pressed
    if( key == 'w' )
        keyArray[keyEnum.W_Key] = true;
    // Repeat for each key you care about...
}

function onKeyUp()
{
    // Detect which key was released
    if( key == 'w' )
        keyArray[keyEnum.W_Key] = false;
    // Repeat for each key you care about...
}

function isKeyDown(key)
{
    return keyArray[key];
}




