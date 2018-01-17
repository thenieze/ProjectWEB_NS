/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
console.log("Ja, ff testen of je JS synchroniseerd met je HTML.");

// adhv de tijd groet NSverhalen jou :)
var greeting;
var time = new Date().getHours();
if (time < 12) {
    greeting = "Goedemorgen, Wat ga jij lezen vandaag?";
} else if (time < 17) {
    greeting = "Goedemiddag, Wat ga jij lezen vandaag?";
} else {
    greeting = "Goedeavond, Wat ga jij lezen vandaag?";
}


// Deze code haalt de 'element' ID uit de html code en vervangt deze in HTML met een andere inhoud.
document.querySelector('#demo').innerHTML = greeting;


/* microinteractie heart adhv lampje opdracht vorig jaar */
var IconAan = "bulb";
var imgSource = document.querySelector('#bulb').src;


function showResult() {
    if (IconAan === 'bulboff'){
    	IconAan = "bulb";
 
    document.querySelector('#bulb').src="images/heart.svg";
     console.log("uit");
    } else if (IconAan === 'bulb') {
    	IconAan = "bulboff";
        document.querySelector('#bulb').src="images/favorite-heart-button.svg";
        console.log("aan");
    }
}

document.querySelector('#bulb').addEventListener('click', showResult, false);


/* microinteractie chat */
var aan = "chat";
var imgSource = document.querySelector('#chat').src;


function chatIcon() {
    if (aan == 'chatoff'){
    	aan = "chat";
document.querySelector('#chat').src="images/chat.svg";
    console.log("uit");
    } 
    else if (aan == 'chat') {
    	aan = "chatoff";
document.querySelector('#chat').src="images/chatfull.svg";
console.log("aan");
    }
}

document.querySelector('#chat').addEventListener('click', chatIcon, false);



//micro loadinbar https://www.w3schools.com/howto/howto_js_progressbar.asp
function move(){
    var elem = document.querySelector("#loadingbar-inner");
var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}