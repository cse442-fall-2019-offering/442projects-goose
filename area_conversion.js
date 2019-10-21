/*
 *  speedConverter takes in a number correspnding to a quantity to be converted
 *  and two strings correspondin to the orriginal units and the units the
 *  quantity is being converted to. A number is returned equal to the converted
 *  quantity
 */
function areaConverter(input, primaryUnit, secondaryUnit){
    var value; //this is the base unit
    if(primaryUnit == secondaryUnit){
      return input
    }
    switch(primaryUnit){
      case "mm":
        value = input * 0.000001
        break;
      case "cm":
        value = input * 0.0001;
        break;
      case "m":
        value = input;
        break;
      case "km":
        value = input * 1000000;
        break;
      case "ha":
        value = input * 10000;
        break;
      case "in":
        value = input * 0.00064516;
        break;
      case "ft":
        value = input * 0.09290304;
        break;
      case "yd":
        value = input * 0.83612736;
        break;
      case "mi":
        value = input * 2589988.110336;
        break;
      case "ac":
        value = input * 4046.8564224;
        break;
    }
    switch(secondaryUnit){
      case "mm":
        return value * 1000000;
      case "cm":
        return value * 10000;
      case "m":
        return value;
      case "km":
        return value * 0.0000010;
      case "ha":
        return value * 0.0001;
      case "in":
        return value * 1550.0031000062;
      case "ft":
        return value * 10.76391041671;
      case "yd":
        return value * 1.1959900463011;
      case "mi":
        return value * 0.00000038610215854245;
      case "ac":
        return value * 0.00024710538146717;
    }
  }