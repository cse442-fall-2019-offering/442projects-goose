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

//File ends here
