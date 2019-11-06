function switchUnits(){
    var holdSelect = document.getElementById("primarySelect").options[document.getElementById("primarySelect").selectedIndex].value;
    var holdInput = document.getElementById("primaryInput").value;
    document.getElementById("primarySelect").value = document.getElementById("secondarySelect").options[document.getElementById("secondarySelect").selectedIndex].value;
    document.getElementById("primaryInput").value = document.getElementById("secondaryInput").value;
    document.getElementById("secondarySelect").value = holdSelect;
    document.getElementById("secondaryInput").value = holdInput;
  }
