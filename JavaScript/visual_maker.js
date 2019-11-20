/*
 *Takes in the converted bounds and displays the visual comparison on the the webpage
 */

function generateVisual()
{
  /* creating the canvas */
  var canvas = document.getElementById("visual");
  var visualizer = document.getElementById("visualizer");
  canvas.width = visualizer.offsetWidth-50;
  canvas.height = visualizer.offsetHeight-50;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.width);
  /* drawing the axes */
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2 - 3);
  ctx.lineTo(canvas.width, canvas.height/2 - 3);
  ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2 + 3);
  ctx.lineTo(canvas.width, canvas.height/2 + 3);
  ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'));
  ctx.stroke();
  /* drawing the markings in the primary axis */
  var lowerBoundPrimary = parseFloat(document.getElementById("primaryInput").value) - (canvas.width/2)/20;
  var upperBoundPrimary = parseFloat(document.getElementById("primaryInput").value) + (canvas.width/2)/20;
  var scaleFactor = canvas.width/(upperBoundPrimary - lowerBoundPrimary);
  for (var i = Math.ceil(lowerBoundPrimary); i <= upperBoundPrimary; i++){
    if (i != document.getElementById("primaryInput").value && i >= 0){
      ctx.beginPath();
      ctx.moveTo(scaleFactor*(i-lowerBoundPrimary), canvas.height/2.6);
      ctx.lineTo(scaleFactor*(i-lowerBoundPrimary), canvas.height/2 - 3);
      ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
      ctx.stroke();
      ctx.font = "10px Overpass";
      ctx.fillStyle = "#000000";
      ctx.save();
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.translate(scaleFactor*(i-lowerBoundPrimary), canvas.height/2.8);
      ctx.rotate(-60 * Math.PI / 180);
      ctx.fillText(i, 0, 0);
      ctx.restore();
    }
  }
  /* drawing the markings in the secondary axis */
  var lowerBoundSecondary = calculateConversion(lowerBoundPrimary, document.getElementById("primarySelect").value, document.getElementById("secondarySelect").value);
  var upperBoundSecondary = calculateConversion(upperBoundPrimary, document.getElementById("primarySelect").value, document.getElementById("secondarySelect").value);
  var scaleFactor = canvas.width/(upperBoundSecondary - lowerBoundSecondary);
  var increment = 1;
  while (canvas.width/((upperBoundSecondary - lowerBoundSecondary)/increment) > 60){
    increment /= 10;
  }
  while (canvas.width/((upperBoundSecondary - lowerBoundSecondary)/increment) < 15){
    increment *= 10;
  }
  for (var i = Math.ceil(lowerBoundSecondary/increment)*increment; i <= upperBoundSecondary; i += increment){
    if (i != document.getElementById("secondaryInput").value && i >= 0){
      ctx.beginPath();
      ctx.moveTo(scaleFactor*(i-lowerBoundSecondary), canvas.height/2 + 3);
      ctx.lineTo(scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.6);
      ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'));
      ctx.stroke();
      ctx.font = "10px Overpass";
      ctx.save();
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.translate(scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.8);
      ctx.rotate(-60 * Math.PI / 180);
      if (increment < 1){
        ctx.fillText(i.toFixed(Math.abs(Math.floor(Math.log10(increment)))), 0, 0);
      }
      else{
        ctx.fillText(i, 0, 0);
      }
      ctx.restore();
    }
  }
  /*labelling axes*/
  ctx.font = "20px Overpass";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(document.getElementById("primarySelect").value, 10, 30);
  ctx.fillText(document.getElementById("secondarySelect").value, 10, canvas.height-30);
  /* labelling the converted unit */
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, canvas.height/2.7);
  ctx.lineTo(canvas.width/2, canvas.height-(canvas.height/2.7));
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(document.getElementById("primaryInput").value, canvas.width/2, 30);
  ctx.fillText(document.getElementById("secondaryInput").value, canvas.width/2, canvas.height-30);
}

function generateVisualTemp()
{
  /* creating the canvas */
  var canvas = document.getElementById("visual");
  var visualizer = document.getElementById("visualizer");
  canvas.width = visualizer.offsetWidth-50;
  canvas.height = visualizer.offsetHeight-50;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.width);
  /* drawing the axes */
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2 - 3);
  ctx.lineTo(canvas.width, canvas.height/2 - 3);
  ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2 + 3);
  ctx.lineTo(canvas.width, canvas.height/2 + 3);
  ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'));
  ctx.stroke();
  /* drawing the markings in the primary axis */
  var lowerBoundPrimary = parseFloat(document.getElementById("primaryInput").value) - (canvas.width/2)/20;
  var upperBoundPrimary = parseFloat(document.getElementById("primaryInput").value) + (canvas.width/2)/20;
  var scaleFactor = canvas.width/(upperBoundPrimary - lowerBoundPrimary);
  for (var i = Math.ceil(lowerBoundPrimary); i <= upperBoundPrimary; i++){
    if (i != document.getElementById("primaryInput").value && calculateConversion(i, document.getElementById("primarySelect").value, "Kelvin") >= 0){
      ctx.beginPath();
      ctx.moveTo(scaleFactor*(i-lowerBoundPrimary), canvas.height/2.6);
      ctx.lineTo(scaleFactor*(i-lowerBoundPrimary), canvas.height/2 - 3);
      ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
      ctx.stroke();
      ctx.font = "10px Overpass";
      ctx.fillStyle = "#000000";
      ctx.save();
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.translate(scaleFactor*(i-lowerBoundPrimary), canvas.height/2.8);
      ctx.rotate(-60 * Math.PI / 180);
      ctx.fillText(i, 0, 0);
      ctx.restore();
    }
  }
  /* drawing the markings in the secondary axis */
  var lowerBoundSecondary = calculateConversion(lowerBoundPrimary, document.getElementById("primarySelect").value, document.getElementById("secondarySelect").value);
  var upperBoundSecondary = calculateConversion(upperBoundPrimary, document.getElementById("primarySelect").value, document.getElementById("secondarySelect").value);
  var scaleFactor = canvas.width/(upperBoundSecondary - lowerBoundSecondary);
  var increment = 1;
  while (canvas.width/((upperBoundSecondary - lowerBoundSecondary)/increment) > 60){
    increment /= 10;
  }
  while (canvas.width/((upperBoundSecondary - lowerBoundSecondary)/increment) < 15){
    increment *= 10;
  }
  for (var i = Math.ceil(lowerBoundSecondary/increment)*increment; i <= upperBoundSecondary; i += increment){
    if (i != document.getElementById("secondaryInput").value && calculateConversion(i, document.getElementById("secondarySelect").value, "Kelvin") >= 0){
      ctx.beginPath();
      ctx.moveTo(scaleFactor*(i-lowerBoundSecondary), canvas.height/2 + 3);
      ctx.lineTo(scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.6);
      ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'));
      ctx.stroke();
      ctx.font = "10px Overpass";
      ctx.save();
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.translate(scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.8);
      ctx.rotate(-60 * Math.PI / 180);
      if (increment < 1){
        ctx.fillText(i.toFixed(Math.abs(Math.floor(Math.log10(increment)))), 0, 0);
      }
      else{
        ctx.fillText(i, 0, 0);
      }
      ctx.restore();
    }
  }
  /*labelling axes*/
  ctx.font = "20px Overpass";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(document.getElementById("primarySelect").value, 10, 30);
  ctx.fillText(document.getElementById("secondarySelect").value, 10, canvas.height-30);
  /* labelling the converted unit */
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, canvas.height/2.7);
  ctx.lineTo(canvas.width/2, canvas.height-(canvas.height/2.7));
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(document.getElementById("primaryInput").value, canvas.width/2, 30);
  ctx.fillText(document.getElementById("secondaryInput").value, canvas.width/2, canvas.height-30);
}
