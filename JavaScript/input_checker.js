function checkInput(){
    var input = document.getElementById('primaryInput').value;
    console.log(input);
    if (input != '') {
      if (document.getElementById('primarySelect').value == "°F" || document.getElementById('primarySelect').value == "°C"){
          if (calculateConversion(input, document.getElementById("primarySelect").value, "K") < 0){
            document.getElementById('convertButton').disabled = true;
          }
          else{
            document.getElementById('convertButton').disabled = false;
          }
      }
      else if (input < 0){
        document.getElementById('convertButton').disabled = true;
      }
      else{
        document.getElementById('convertButton').disabled = false;
      }
    }
    else {
        document.getElementById('convertButton').disabled = true;
    }
  }
