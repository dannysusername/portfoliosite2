


const burger = document.querySelector(".burger");
const navmenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {

  navmenu.classList.toggle("active");

});

document.querySelectorAll(".components").forEach(component => {
  const carousel = component.querySelector(".carousel");
  component.querySelector(".fa-solid.fa-arrow-left").addEventListener("click", () => goLeft(carousel));
  component.querySelector(".fa-solid.fa-arrow-right").addEventListener("click", () => goRight(carousel));
  
});

function goRight(carousel){
  const slideWidth = carousel.querySelector('.slide1').offsetWidth;
  carousel.scrollLeft += slideWidth;

}
function goLeft(carousel){
  const slideWidth = carousel.querySelector('.slide1').offsetWidth;
  carousel.scrollLeft -= slideWidth;
  
}

function addBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "0px 0px 5px 1.5px rgba(0, 0, 0, 0.2)";
}

function removeBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "";
}

FlightSearch.init({
  el: document.getElementById('search-fl'),
  token: 'woozV7g3IkyOBtWkJ0pHhYwjR3Oz7h0hOvQKjMkQDNmGTR71F1k6feWiCGPn',
});