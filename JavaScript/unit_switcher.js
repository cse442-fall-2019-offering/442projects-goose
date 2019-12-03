function switchUnits(){
    var holdSelect = document.getElementById("primarySelect").options[document.getElementById("primarySelect").selectedIndex].value;
    var holdInput = input;
    input = output;
    output = holdInput;
    document.getElementById("primarySelect").value = document.getElementById("secondarySelect").options[document.getElementById("secondarySelect").selectedIndex].value;
    document.getElementById("primaryInput").value = input;
    document.getElementById("secondarySelect").value = holdSelect;
    document.getElementById("secondaryInput").value = output;
  }
