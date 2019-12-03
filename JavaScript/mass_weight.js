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
        value = input * 0.45359237;
        break;
      case "tons":
        value = input * 907.18474;
        break;
      case "st.":
        value = input * 6.35029318;
        break
      case "slug":
        value = input * 14.593902937205;
        break
      case "gr":
        value = input * 6.4798910000174e-5;
        break
      case "dr":
        value = input * 0.0017718451953125;
        break
      case "ct":
        value = input * 0.0002;
        break
      case "cwt":
        value = input * 45.359237;
        break
      case "long cwt":
        value = input * 50.80234544;
        break
      case "long tons":
        value = input * 1016.0469088;
        break
      case "dwt":
        value = input * 0.0015551738400042;
        break
      case "oz t":
        value = input * 0.031103474999995;
        break
      case "lb t":
        value = input * 0.37324169999994;
        break
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
      case "st.":
        return value * 0.15747304441777 ;
      case "slug":
        return value * 0.0685217658568;
      case "gr":
        return value * 15432.3583529;
      case "dr":
        return value * 564.383391193;
      case "ct":
        return value * 5000;
      case "cwt":
        return value * 0.022046226218488;
      case "long cwt":
        return value * 0.019684130552221;
      case "long tons":
        return value * 0.00098420652761106;
      case "dwt":
         return value * 643.01493137083;
      case "oz t":
        return value * 32.15074842924;
      case "lb t":
        return value * 2.67922903577;
    }
}

function convertUnits(){
  input = document.getElementById("primaryInput").value;
  var primaryUnit = document.getElementById("primarySelect").value;
  var secondaryUnit = document.getElementById("secondarySelect").value;
  output = Math.round(100000000 * calculateConversion(input, primaryUnit, secondaryUnit)) / 100000000.0;
  document.getElementById("secondaryInput").value = output;
}
