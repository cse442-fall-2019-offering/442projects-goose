function checkInput(){
    var input = document.getElementById('primaryInput').value;
    if (input != '') {
        document.getElementById('convertButton').disabled = false;
    }
    else {
        document.getElementById('convertButton').disabled = true;
    }
  }