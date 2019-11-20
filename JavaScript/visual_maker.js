/*
 *Takes in the converted bounds and displays the visual comparison on the the webpage
 */

function generateVisual()
{
  /* creating the canvas */
  var canvas = document.getElementById("visual");
  var display = document.getElementById("display");
  canvas.width = display.offsetWidth-50;
  canvas.height = display.offsetHeight-30;
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
  var zoomlevel = document.getElementById("zoomlevel").value;
  var lowerBoundPrimary = parseFloat(document.getElementById("primaryInput").value) - (canvas.width/2)/(20**zoomlevel);
  var upperBoundPrimary = parseFloat(document.getElementById("primaryInput").value) + (canvas.width/2)/(20**zoomlevel);
  var scaleFactor = canvas.width/(upperBoundPrimary - lowerBoundPrimary);
  var increment = 1;
  while (canvas.width/((upperBoundPrimary - lowerBoundPrimary)/increment) > 60){
    increment /= 10;
  }
  while (canvas.width/((upperBoundPrimary - lowerBoundPrimary)/increment) < 15){
    increment *= 10;
  }
  document.getElementById("upTo").value = Math.floor(upperBoundPrimary/increment)*increment;
  if (lowerBoundPrimary > 0){
    document.getElementById("downTo").value = Math.ceil(lowerBoundPrimary/increment)*increment;
    document.getElementById("downTo").disabled = false;
    document.getElementById("scrollDown").disabled = false;
  }
  if (lowerBoundPrimary <= 0){
    document.getElementById("downTo").value = "";
    document.getElementById("downTo").disabled = true;
    document.getElementById("scrollDown").disabled = true;
    ctx.save();
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2 - 3);
    ctx.lineTo(scaleFactor*(0-lowerBoundPrimary), canvas.height/2 - 3);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2 + 3);
    ctx.lineTo(scaleFactor*(0-lowerBoundPrimary), canvas.height/2 + 3);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(scaleFactor*(0-lowerBoundPrimary), canvas.height/2.6);
    ctx.lineTo(scaleFactor*(0-lowerBoundPrimary), canvas.height - canvas.height/2.6);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.font = "10px Overpass";
    ctx.fillStyle = "#000000";
    ctx.save();
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.translate(scaleFactor*(0-lowerBoundPrimary), canvas.height/2.8);
    ctx.rotate(-60 * Math.PI / 180);
    ctx.fillText(0, 0, 0);
    ctx.restore();
  }
  for (var i = Math.ceil(lowerBoundPrimary/increment)*increment; i <= upperBoundPrimary; i += increment){
    if (i != document.getElementById("primaryInput").value && i > 0){
      ctx.font = "10px Overpass";
      ctx.fillStyle = "#000000";
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
      if (increment < 1){
        ctx.fillText(i.toFixed(Math.abs(Math.floor(Math.log10(increment)))), 0, 0);
      }
      else{
        ctx.fillText(i, 0, 0);
      }
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
  if (lowerBoundSecondary <= 0){
    ctx.font = "10px Overpass";
    ctx.save();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.translate(scaleFactor*(0-lowerBoundSecondary), canvas.height - canvas.height/2.8);
    ctx.rotate(-60 * Math.PI / 180);
    ctx.fillText(0, 0, 0);
    ctx.restore();
  }
  for (var i = Math.ceil(lowerBoundSecondary/increment)*increment; i <= upperBoundSecondary; i += increment){
    if (i != document.getElementById("secondaryInput").value && i > 0){
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
  /* labelling the converted unit */
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, canvas.height/2.7);
  ctx.lineTo(canvas.width/2, canvas.height-(canvas.height/2.7));
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(document.getElementById("primaryInput").value + " " + document.getElementById("primarySelect").value, canvas.width/2, 30);
  ctx.fillText(document.getElementById("secondaryInput").value + " " + document.getElementById("secondarySelect").value, canvas.width/2, canvas.height-30);
}

function generateVisualTemp()
{
  /* creating the canvas */
  var canvas = document.getElementById("visual");
  var display = document.getElementById("display");
  canvas.width = display.offsetWidth-50;
  canvas.height = display.offsetHeight-50;
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
  var zoomlevel = document.getElementById("zoomlevel").value;
  var lowerBoundPrimary = parseFloat(document.getElementById("primaryInput").value) - (canvas.width/2)/(20**zoomlevel);
  var upperBoundPrimary = parseFloat(document.getElementById("primaryInput").value) + (canvas.width/2)/(20**zoomlevel);
  var scaleFactor = canvas.width/(upperBoundPrimary - lowerBoundPrimary);
  var increment = 1;
  while (canvas.width/((upperBoundPrimary - lowerBoundPrimary)/increment) > 60){
    increment /= 10;
  }
  while (canvas.width/((upperBoundPrimary - lowerBoundPrimary)/increment) < 15){
    increment *= 10;
  }
  if (calculateConversion(lowerBoundPrimary, document.getElementById("primarySelect").value, "K") <= 0){
    ctx.save();
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2 - 3);
    ctx.lineTo(scaleFactor*(calculateConversion(0, "K", document.getElementById("primarySelect").value)-lowerBoundPrimary), canvas.height/2 - 3);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2 + 3);
    ctx.lineTo(scaleFactor*(calculateConversion(0, "K", document.getElementById("primarySelect").value)-lowerBoundPrimary), canvas.height/2 + 3);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(scaleFactor*(calculateConversion(0, "K", document.getElementById("primarySelect").value)-lowerBoundPrimary), canvas.height/2.6);
    ctx.lineTo(scaleFactor*(calculateConversion(0, "K", document.getElementById("primarySelect").value)-lowerBoundPrimary), canvas.height - canvas.height/2.6);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.font = "10px Overpass";
    ctx.fillStyle = "#000000";
    ctx.save();
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.translate(scaleFactor*(calculateConversion(0, "K", document.getElementById("primarySelect").value)-lowerBoundPrimary), canvas.height/2.8);
    ctx.rotate(-60 * Math.PI / 180);
    ctx.fillText(calculateConversion(0, "K", document.getElementById("primarySelect").value).toFixed(2), 0, 0);
    ctx.restore();
  }
  for (var i = Math.ceil(lowerBoundPrimary/increment)*increment; i <= upperBoundPrimary; i += increment){
    if (i != document.getElementById("primaryInput").value && calculateConversion(i, document.getElementById("primarySelect").value, "K") > 0){
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
      if (increment < 1){
        ctx.fillText(i.toFixed(Math.abs(Math.floor(Math.log10(increment)))), 0, 0);
      }
      else{
        ctx.fillText(i, 0, 0);
      }
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
  if (calculateConversion(lowerBoundSecondary, document.getElementById("secondarySelect").value, "K") <= 0){
    ctx.font = "10px Overpass";
    ctx.save();
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.translate(scaleFactor*(calculateConversion(0, "K", document.getElementById("secondarySelect").value)-lowerBoundSecondary), canvas.height - canvas.height/2.8);
    ctx.rotate(-60 * Math.PI / 180);
    ctx.fillText(calculateConversion(0, "K", document.getElementById("secondarySelect").value).toFixed(2), 0, 0);
    ctx.restore();
  }
  for (var i = Math.ceil(lowerBoundSecondary/increment)*increment; i <= upperBoundSecondary; i += increment){
    if (i != document.getElementById("secondaryInput").value && calculateConversion(i, document.getElementById("secondarySelect").value, "K") > 0){
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
  /* labelling the converted unit */
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, canvas.height/2.7);
  ctx.lineTo(canvas.width/2, canvas.height-(canvas.height/2.7));
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(document.getElementById("primaryInput").value + " " + document.getElementById("primarySelect").value, canvas.width/2, 30);
  ctx.fillText(document.getElementById("secondaryInput").value + " " + document.getElementById("secondarySelect").value, canvas.width/2, canvas.height-30);
}
