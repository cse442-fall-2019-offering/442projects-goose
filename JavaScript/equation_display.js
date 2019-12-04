async function generateEquation()
{
  /* creating the canvas */
  var canvas = document.getElementById("EquationVis");
  var visualizer = document.getElementById("EquationVisClass");
  canvas.width = visualizer.offsetWidth-50;
  canvas.height = visualizer.offsetHeight-50;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.width);
  /*labelling axes*/
  ctx.font = "20px Overpass";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  var ratio = 420

  if (document.getElementById("primarySelect").value == "°F"){
    if(document.getElementById("secondarySelect").value == "°C"){
      ratio = "( "+ document.getElementById("primaryInput").value + " °F - 32 °F) * 5 °C / 9 °F";
    }
    else if(document.getElementById("secondarySelect").value == "K"){
      ratio = "( "+ document.getElementById("primaryInput").value + " °F - 32 °F) * 5 K / 9 °F + 273.15 K";
    }
    else{
      ratio = document.getElementById("primaryInput").value + "°F * 1 °F / 1 °F";
    }

  }
  if (document.getElementById("primarySelect").value == "°C"){
    if(document.getElementById("secondarySelect").value == "°F"){
      ratio = "( "+ document.getElementById("primaryInput").value + " * 9 °F / 5 °C ) + 32 °F";
    }
    else if(document.getElementById("secondarySelect").value == "K"){
      ratio = document.getElementById("primaryInput").value + " °C * (1 K / 1 °C) + 273.15 K";
    }
    else{
      ratio = document.getElementById("primaryInput").value + "°C * 1 °C / 1 °C";
    }

  }
  if (document.getElementById("primarySelect").value == "K"){
    if(document.getElementById("secondarySelect").value == "°C"){
      ratio = + document.getElementById("primaryInput").value + " K * (1 °C / 1 K) - 273.15 °C";
    }
    else if(document.getElementById("secondarySelect").value == "°F"){
      ratio = "( "+ document.getElementById("primaryInput").value + " K - 273.15 K) * ( 9 °F / 5 K ) + 32 °F";
    }
    else{
      ratio = document.getElementById("primaryInput").value + "K * 1 K / 1 K";
    }

  }
  //ratio = 420
  ctx.fillText(document.getElementById("primaryInput").value + " " + document.getElementById("primarySelect").value
  + " = " + ratio +" = "
  + document.getElementById("secondaryInput").value+" "+ document.getElementById("secondarySelect").value, 10, 30);
}
