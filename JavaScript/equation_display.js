function generateEquation()
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
function generateEquationTemp()
{

    first
    second

    switch(unit1){
        case "Celsius":
          first = 0;
          break;
        case "Kelvin":
            first = 1;
          break;
        case "Fahrenheit":
            first = 2;
          break;
    }

    switch(unit2){
        case "Celsius"
            second = 0;
          break;
        case "Kelvin":
            second = 1;
          break;
        case "Fahrenheit":
            second = 2;
          break;
    }

    /*
     * cel-cel, in-ft, in-yd
     * ft-in, ft-ft, ft-yd
     * yd-in, yd-ft, yd-yd
     */

    images = [
        ["CeltoCel.png", "inToFt.png", "inToYd.png"],
        ["inToFt.png", "KeltoKel.png", "ftToYd.png"],
        ["inToYd.png", "ftToYd.png", "FahrtoFahr.png"]
    ]

    return images[first, second];

}
