/*
 *  speedConverter takes in a number correspnding to a quantity to be converted
 *  and two strings correspondin to the orriginal units and the units the
 *  quantity is being converted to. A number is returned equal to the converted
 *  quantity
 */

var input = 0;
var output = 0;

function calculateConversion(input, primaryUnit, secondaryUnit){
    var value; //this is the base unit
    if(primaryUnit == secondaryUnit){
      return input
    }
    switch(primaryUnit){
      case "m/s":
        value = input;
        break;
      case "km/h":
        value = input * 0.27777778;
        break;
      case "ft/s":
        value = input * 0.3048;
        break;
      case "mph":
        value = input * 0.44704;
        break;
      case "knots":
        value = input * 0.51444444;
        break;
    }
    switch(secondaryUnit){
      case "m/s":
        return value;
      case "km/h":
        return value * 3.6;
      case "ft/s":
        return value * 3.28083990;
      case "mph":
        return value * 1.46666667;
      case "knots":
        return value * 1.68780986;
    }
  }

  function convertUnits(){
    input = document.getElementById("primaryInput").value;
    var primaryUnit = document.getElementById("primarySelect").value;
    var secondaryUnit = document.getElementById("secondarySelect").value;
    output = calculateConversion(input, primaryUnit, secondaryUnit);
    document.getElementById("secondaryInput").value = output;
  }
