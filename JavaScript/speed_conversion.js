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
      case "mps":
        value = input;
        break;
      case "kph":
        value = input * 0.27777778;
        break;
      case "fps":
        value = input * 0.3048;
        break;
      case "mph":
        value = input * 0.44704;
        break;
      case "knot":
        value = input * 0.51444444;
        break;
    }
    switch(secondaryUnit){
      case "mps":
        return value;
      case "kph":
        return value * 3.6;
      case "fps":
        return value * 3.28083990;
      case "mph":
        return value * 1.46666667;
      case "knot":
        return value * 1.68780986;
    }
  }

  function convertSpeed(){
    var input = document.getElementById("primaryInput").value;
    var primaryUnit = document.getElementById("primarySelect").value;
    var secondaryUnit = document.getElementById("secondarySelect").value;
    ret = calculateConversion(input, primaryUnit, secondaryUnit);
    document.getElementById("secondaryInput").value = calculateConversion(input, primaryUnit, secondaryUnit);

  }
