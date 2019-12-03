/*
 *  calculateConversion takes in a number correspnding to a quantity to be converted
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
      case "mg":
        value = input * 0.000001
        break;
      case "g":
        value = input * 0.001;
        break;
      case "kg":
        value = input;
        break;
      case "t":
        value = input * 1000;
        break;
      case "oz":
        value = input * 0.028349523125;
        break;
      case "lb":
        value = input * 0.0625;
        break;
      case "tons":
        value = input * 0.09290304;
        break;
    }
    switch(secondaryUnit){
      case "mg":
        return value * 1000000;
      case "g":
        return value * 1000;
      case "kg":
        return value;
      case "t":
        return value * 0.0000010;
      case "oz":
        return value * 35.27396194958;
      case "lb":
        return value * 2.2046226218488;
      case "tons":
        return value * 0.0011023113109244;
    }
}

function convertUnits(){
  input = document.getElementById("primaryInput").value;
  var primaryUnit = document.getElementById("primarySelect").value;
  var secondaryUnit = document.getElementById("secondarySelect").value;
  output = calculateConversion(input, primaryUnit, secondaryUnit);
  document.getElementById("secondaryInput").value = output;
}
