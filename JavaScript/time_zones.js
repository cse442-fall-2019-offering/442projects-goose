// JavaScript file for timeZones portion of application
// @author: Damon L

//Function to generate the location options
function generateOptions(){

  selectPrimary = document.getElementById("primarySelect");
  selectSecondary = document.getElementById("secondarySelect");

  const Http = new XMLHttpRequest();
  const url='http://api.timezonedb.com/v2.1/list-time-zone?key=QK25DMB8D4N2&format=json';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
      var obj = JSON.parse(Http.responseText);
      var zones = obj["zones"];
      for (var i = 0; i < zones.length; i++) {
        var optionPrimary = document.createElement("option");
        var optionSecondary = document.createElement("option");
        optionPrimary.value = zones[i]["zoneName"];
        optionPrimary.text = zones[i]["countryName"] + " (" + zones[i]["zoneName"] + ")";
        optionSecondary.value = zones[i]["zoneName"];
        optionSecondary.text = zones[i]["countryName"] + " (" + zones[i]["zoneName"] + ")";
        selectPrimary.appendChild(optionPrimary);
        selectSecondary.appendChild(optionSecondary);
        }
      }
    }
  }

//function to convert between timeZones
function convertTimeZones(){

    var timeStamp = document.getElementById("primaryInput").value;
    var ts = Math.floor(new Date(timeStamp).getTime() / 1000);
    var convertFrom = document.getElementById("primarySelect").value;
    var convertTo = document.getElementById("secondarySelect").value;

    const Http = new XMLHttpRequest();
    const url = 'http://api.timezonedb.com/v2.1/convert-time-zone?key=QK25DMB8D4N2&format=json&from=' + convertFrom + '&to=' + convertTo + '&time='+ ts;
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200){
      var obj = JSON.parse(Http.responseText);
      var retTime = obj["toTimestamp"];
      generateClocks(retTime);
      var date = new Date(retTime * 1000);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      if (hours > 12) {
        hours = hours - 12;
      }
      var convDate = month + "/" + day + "/" + year + ", " + hours + ":" + minutes.substr(-2) + " " + ampm;

      document.getElementById("secondaryInput").value = convDate;
      }
  }
}

  //Fuction to generate visual clocks for display on conversion
  function generateClocks(timeTo){

    var clocks = ['clockFrom', 'clockTo'];

    for (var i = 0; i < clocks.length; i++) {
      var canvas = document.getElementById(clocks[i]);
      var ctx = canvas.getContext("2d");
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#333"
      ctx.fillRect(0, 0, canvas.width, canvas.width);
      var radius = canvas.height / 2;
      ctx.translate(radius, radius);
      radius = radius * 0.90
      drawClock(i);
      ctx.restore();
    }

    function drawClock(count) {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius, timeTo, count);
    }

    function drawFace(ctx, radius){
      var grad;

      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();

      grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
      grad.addColorStop(0, '#333');
      grad.addColorStop(0.5, 'white');
      grad.addColorStop(1, '#333');
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius*0.1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      var ang;
      var num;
      ctx.font = radius * 0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    }

    function drawTime(ctx, radius, timeTo, count){
      var timeFromRaw = document.getElementById("primaryInput").value;
      var timeFrom = Math.floor(new Date(timeFromRaw).getTime() / 1000);
      var time;
      if (count == 0){
        time = timeFrom;
      } else {
        time = timeTo
      }
        var now = new Date(time * 1000);
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour%12;
        hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second = (second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
      }

    function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }
  }


//File ends here
