/*
 *  speedConverter takes in a number correspnding to a quantity to be converted
 *  and two strings correspondin to the orriginal units and the units the
 *  quantity is being converted to. A number is returned equal to the converted
 *  quantity
 */
function calculateConversion(input, primaryUnit, secondaryUnit){
    var value; //this is the base unit
    if(primaryUnit == secondaryUnit){
      return input
    }
    switch(primaryUnit){
      case "mm²":
        value = input * 0.000001
        break;
      case "cm²":
        value = input * 0.0001;
        break;
      case "m²":
        value = input;
        break;
      case "km²":
        value = input * 1000000;
        break;
      case "ha":
        value = input * 10000;
        break;
      case "in²":
        value = input * 0.00064516;
        break;
      case "ft²":
        value = input * 0.09290304;
        break;
      case "yd²":
        value = input * 0.83612736;
        break;
      case "mi²":
        value = input * 2589988.110336;
        break;
      case "ac":
        value = input * 4046.8564224;
        break;
    }
    switch(secondaryUnit){
      case "mm²":
        return value * 1000000;
      case "cm²":
        return value * 10000;
      case "m²":
        return value;
      case "km²":
        return value * 0.0000010;
      case "ha":
        return value * 0.0001;
      case "in²":
        return value * 1550.0031000062;
      case "ft²":
        return value * 10.76391041671;
      case "yd²":
        return value * 1.1959900463011;
      case "mi²":
        return value * 0.00000038610215854245;
      case "ac":
        return value * 0.00024710538146717;
    }
  }

  function convertUnits(){
    var input = document.getElementById("primaryInput").value;
    var primaryUnit = document.getElementById("primarySelect").value;
    var secondaryUnit = document.getElementById("secondarySelect").value;
    document.getElementById("secondaryInput").value = calculateConversion(input, primaryUnit, secondaryUnit);
  }
