//JavaScript Function to scroll

function scrollDown(){
  document.getElementById("primaryInput").value = document.getElementById("downTo").value;
  checkInput();
  convertUnits();
  generateVisual();
}
function scrollUp(){
  document.getElementById("primaryInput").value = document.getElementById("upTo").value;
  checkInput();
  convertUnits();
  generateVisual();
}

function scrollDownTemp(){
  document.getElementById("primaryInput").value = document.getElementById("downTo").value;
  checkInput();
  convertUnits();
  generateVisualTemp();
}
function scrollUpTemp(){
  document.getElementById("primaryInput").value = document.getElementById("upTo").value;
  checkInput();
  convertUnits();
  generateVisualTemp();
}

//End of file
