//JavaScript Function to scroll

function scrollDown(){
  document.getElementById("primaryInput").value = document.getElementById("downTo").value;
  convertUnits();
  generateVisual();
}
function scrollUp(){
  document.getElementById("primaryInput").value = document.getElementById("upTo").value;
  convertUnits();
  generateVisual();
}

function scrollDownTemp(){
  document.getElementById("primaryInput").value = document.getElementById("downTo").value;
  convertUnits();
  generateVisualTemp();
}
function scrollUpTemp(){
  document.getElementById("primaryInput").value = document.getElementById("upTo").value;
  convertUnits();
  generateVisualTemp();
}

//End of file
