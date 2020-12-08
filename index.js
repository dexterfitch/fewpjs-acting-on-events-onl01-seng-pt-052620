let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF6984";

function moveDodgerLeft() {
  
}

function moveDodgerRight() {
  
}

document.addEventListener("keydown", function(pressed) {
  if (pressed.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (pressed.key === "ArrowRight") {
    moveDodgerRight();
  }
})