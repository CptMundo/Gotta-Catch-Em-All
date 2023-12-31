// Creates the Rules pop-up and the overlay when it's open


const button = document.getElementById("popup-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("overlay");

document.getElementById("playGame").addEventListener("click", function () {
    window.open("game.html", "_self");
});

button.addEventListener("click", function () {
    popup.style.display = "block";
    overlay.style.display = "block";
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
});
