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
  var ratio = await calculateConversion(1, document.getElementById("primarySelect").value, document.getElementById("secondarySelect").value)
  ctx.fillText(document.getElementById("primaryInput").value + " " + document.getElementById("primarySelect").value
  + " = "+ document.getElementById("primaryInput").value +" "+ document.getElementById("primarySelect").value +" * "
   + ratio +" " + document.getElementById("secondarySelect").value
  + " / 1 " + document.getElementById("primarySelect").value +" = "
  + document.getElementById("secondaryInput").value+" "+ document.getElementById("secondarySelect").value, 10, 30);
}
