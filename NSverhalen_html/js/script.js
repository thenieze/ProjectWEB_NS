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
    greeting = "Goedenavond, Wat ga jij lezen vandaag?";
}

// Deze code haalt de 'element' ID uit de html code en vervangt deze in HTML met een andere inhoud.
document.querySelector("#demo").innerHTML = greeting;

//micro loadinbar https://www.w3schools.com/howto/howto_js_progressbar.asp
function move() {
    var elem = document.querySelector("#loadingbar-inner");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

console.log("ff testen");
// FAVORIET
var likeButton = document.querySelector(".likeIcon");


console.log(likeButton);

//actie !
likeButton.addEventListener("click", function () {
    console.log("klikkie");
    likeButton.classList.toggle("liked");
    document.getElementById("score").innerHTML = "14";
});


// COMMENT
var commentButton = document.querySelector(".chatIcon");
console.log(commentButton);

//actie !
commentButton.addEventListener("click", function () {
    console.log("comment click");
    commentButton.classList.toggle("commented");
    document.getElementById("commentCheck").innerHTML = "3";
});


// DOWNLOAD

var downloadButton = document.querySelector(".downloadicon");
var button = document.querySelector(".menuDownloadicon");

console.log(downloadButton);

//actie !
downloadButton.addEventListener("click", function () {
    console.log("klik!");
    downloadButton.classList.toggle("downloaded");
    button.classList.toggle("menuDownload");
    console.log("download succes");
    document.getElementById("toegevoegd").innerHTML = "3";
});