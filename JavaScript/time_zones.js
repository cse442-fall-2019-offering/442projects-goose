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
        var option = document.createElement("option");
        option.value = zones[i]["countryCode"];
        option.text = zones[i]["countryName"] + " (" + zones[i]["zoneName"] + ")";
        selectPrimary.appendChild(option);
        selectSecondary.appendChild(option);
        }
      }
      console.log(zones);
    }
  }

//File ends here
