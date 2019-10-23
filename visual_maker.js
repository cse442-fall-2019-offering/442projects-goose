/*
 *Takes in the converted bounds and displays the visual comparison on the the webpage
 */
function makeVisual(lowerBoundSecondary, upperBoundSecondary)
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
    /*labelling axes*/
    ctx.font = "20px Overpass";
    ctx.fillStyle = "#000000";
    ctx.fillText(document.getElementById("primarySelect").value, 10, 30);
    ctx.fillText(document.getElementById("secondarySelect").value, 10, canvas.height-30);
    /* drawing the markings */
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/3);
    ctx.lineTo(canvas.width/2, canvas.height-(canvas.height/3));
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillText(document.getElementById("primaryInput").value, canvas.width/2, 30);
    ctx.fillText(document.getElementById("secondaryInput").value, canvas.width/2, canvas.height-30);
    var lowerBoundPrimary = parseFloat(document.getElementById("primaryInput").value) - 30;
    var upperBoundPrimary = parseFloat(document.getElementById("primaryInput").value) + 30;
    var scaleFactor = canvas.width/(upperBoundPrimary - lowerBoundPrimary);
    for (var i = Math.ceil(lowerBoundPrimary); i <= upperBoundPrimary; i++){
        if (i != document.getElementById("primaryInput").value && i >= 0){
        ctx.beginPath();
        ctx.moveTo(scaleFactor*(i-lowerBoundPrimary), canvas.height/2.6);
        ctx.lineTo(scaleFactor*(i-lowerBoundPrimary), canvas.height/2 - 3);
        ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
        ctx.stroke();
        ctx.font = "10px Overpass";
        ctx.fillText(i, scaleFactor*(i-lowerBoundPrimary), canvas.height/2.8);
        }
    }
    var scaleFactor = canvas.width/(upperBoundSecondary - lowerBoundSecondary);
    var increment = 1;
    while ((upperBoundSecondary - lowerBoundSecondary)/increment < 2){
        increment /= 10;
    }
    while ((upperBoundSecondary - lowerBoundSecondary)/increment > 60){
        increment *= 10;
    }
    if (increment < 1){
        for (var i = Math.ceil(lowerBoundSecondary)*increment; i <= upperBoundSecondary; i += increment){
        if (i != document.getElementById("secondaryInput").value && i >= 0){
            ctx.beginPath();
            ctx.moveTo(scaleFactor*(i-lowerBoundSecondary), canvas.height/2 + 3);
            ctx.lineTo(scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.6);
            ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'));
            ctx.stroke();
            ctx.font = "10px Overpass";
            ctx.fillText(i, scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.8);
        }
        }
    }
    else{
        for (var i = Math.ceil(lowerBoundSecondary); i <= upperBoundSecondary; i += increment){
        if (i != document.getElementById("secondaryInput").value && i >= 0){
            ctx.beginPath();
            ctx.moveTo(scaleFactor*(i-lowerBoundSecondary), canvas.height/2 + 3);
            ctx.lineTo(scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.6);
            ctx.strokeStyle = String(getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'));
            ctx.stroke();
            ctx.font = "10px Overpass";
            ctx.fillText(i, scaleFactor*(i-lowerBoundSecondary), canvas.height - canvas.height/2.8);
        }
        }
    }
}