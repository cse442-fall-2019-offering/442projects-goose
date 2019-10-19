function speedConverter(input, primaryUnit, secondaryUnit){
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