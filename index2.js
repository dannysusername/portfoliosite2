function addBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "0px 0px 5px 1.5px rgba(0, 0, 0, 0.2)";
}

function removeBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "";
}