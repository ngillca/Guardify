const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const demoButton = document.querySelector("#demo");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
demoButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburger.classList.toggle("check");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.classList.remove("check");
    navMenu.classList.remove("active");
  });
});

// Demo button click
// demoButton.addEventListener("click", () => {
//   console.log("hello world");
// });
