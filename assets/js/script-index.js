const button = document.getElementById("popup-button");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("overlay");

button.addEventListener("click", function () {
    popup.style.display = "block";
    overlay.style.display = "block"; // Show the overlay
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none"; // Hide the overlay
});
