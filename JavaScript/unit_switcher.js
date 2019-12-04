function switchUnits(){
    var holdInput = input;
    input = output;
    output = holdInput;
    document.getElementById("primaryInput").value = input;
    document.getElementById("secondaryInput").value = output;

    var holdSelect = inputUnit;
    inputUnit = outputUnit;
    outputUnit = holdSelect;
    document.getElementById("primarySelect").value = inputUnit;
    document.getElementById("secondarySelect").value = outputUnit;
  }
