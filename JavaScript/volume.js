// JavaScript file for volume portion of application
// @author: Damon L


//Cubic Centimeter (Milliliter) Conversions
function convertCM(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input;
      break;
    case "L":
      ret = input / 1000;
      break;
    case "m³":
      ret = input / 1e+6;
      break;
    case "in³":
      ret = input / 16.387;
      break;
    case "ft³":
      ret = input / 28316.847;
      break;
    case "yd³":
      ret = input / 764554.858;
      break;
    case "fl oz":
      ret = input / 28.413;
      break;
    case "pt":
      ret = input / 568.261;
      break;
    case "gal":
      ret = input / 4546.09;
      break;
    case "fl oz (US)":
      ret = input / 29.574;
      break;
    case "pt (US)":
      ret = input / 473.176;
      break;
    case "gal (US)":
      ret = input / 3785.412;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Decimeter (Liter) Conversions
function convertDM(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 1000;
      break;
    case "L":
      ret = input;
      break;
    case "m³":
      ret = input / 1000;
      break;
    case "in³":
      ret = input * 61.024;
      break;
    case "ft³":
      ret = input / 28.317;
      break;
    case "yd³":
      ret = input / 764.555;
      break;
    case "fl oz":
      ret = input * 35.195;
      break;
    case "pt":
      ret = input * 1.76;
      break;
    case "gal":
      ret = input / 4.546;
      break;
    case "fl oz (US)":
      ret = input * 33.814;
      break;
    case "pt (US)":
      ret = input * 2.113;
      break;
    case "gal (US)":
      ret = input / 3.785;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Meter Conversions
function convertME(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 1e+6;
      break;
    case "L":
      ret = input * 1000;
      break;
    case "m³":
      ret = input;
      break;
    case "in³":
      ret = input * 61023.744;
      break;
    case "ft³":
      ret = input * 35.315;
      break;
    case "yd³":
      ret = input * 1.308;
      break;
    case "fl oz":
      ret = input * 35195.08;
      break;
    case "pt":
      ret = input * 1759.754;
      break;
    case "gal":
      ret = input * 219.969;
      break;
    case "fl oz (US)":
      ret = input * 33814.023;
      break;
    case "pt (US)":
      ret = input * 2113.376;
      break;
    case "gal (US)":
      ret = input * 264.172;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Inch Conversions
function convertIN(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 16.387;
      break;
    case "L":
      ret = input / 61.024;
      break;
    case "m³":
      ret = input / 61023.744;
      break;
    case "in³":
      ret = input;
      break;
    case "ft³":
      ret = input / 1728;
      break;
    case "yd³":
      ret = input / 46656;
      break;
    case "fl oz":
      ret = input / 1.734;
      break;
    case "pt":
      ret = input / 34.677;
      break;
    case "gal":
      ret = input / 277.419;
      break;
    case "fl oz (US)":
      ret = input / 1.805;
      break;
    case "pt (US)":
      ret = input / 28.875;
      break;
    case "gal (US)":
      ret = input / 231;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Feet Conversions
function convertFT(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 28316.847;
      break;
    case "L":
      ret = input * 28.317;
      break;
    case "m³":
      ret = input / 61023.744;
      break;
    case "in³":
      ret = input * 1728;
      break;
    case "ft³":
      ret = input;
      break;
    case "yd³":
      ret = input / 27;
      break;
    case "fl oz":
      ret = input * 996.614;
      break;
    case "pt":
      ret = input * 49.831;
      break;
    case "gal":
      ret = input * 6.229;
      break;
    case "fl oz (US)":
      ret = input * 957.506;
      break;
    case "pt (US)":
      ret = input * 59.844;
      break;
    case "gal (US)":
      ret = input * 7.481;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Yard Conversions
function convertYD(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 764554.858;
      break;
    case "L":
      ret = input * 764.555;
      break;
    case "m³":
      ret = input / 1.308;
      break;
    case "in³":
      ret = input * 46656;
      break;
    case "ft³":
      ret = input * 27;
      break;
    case "yd³":
      ret = input;
      break;
    case "fl oz":
      ret = input * 26908.569;
      break;
    case "pt":
      ret = input * 1345.428;
      break;
    case "gal":
      ret = input * 168.179;
      break;
    case "fl oz (US)":
      ret = input * 25852.675;
      break;
    case "pt (US)":
      ret = input * 1615.792;
      break;
    case "gal (US)":
      ret = input * 201.974;
      break;
  }
  //return conversion
  return ret;
}


// Fluid Ounce Conversions
function convertFL(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 28.413;
      break;
    case "L":
      ret = input / 35.195;
      break;
    case "m³":
      ret = input / 35195.08;
      break;
    case "in³":
      ret = input * 1.734;
      break;
    case "ft³":
      ret = input / 996.614;
      break;
    case "yd³":
      ret = input / 26908.569;
      break;
    case "fl oz":
      ret = input;
      break;
    case "pt":
      ret = input / 20;
      break;
    case "gal":
      ret = input / 160;
      break;
    case "fl oz (US)":
      ret = input / 1.041;
      break;
    case "pt (US)":
      ret = input / 16.653;
      break;
    case "gal (US)":
      ret = input / 133.228;
      break;
  }
  //return conversion
  return ret;
}


// Pint Conversions
function convertPT(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 568.261;
      break;
    case "L":
      ret = input / 1.76;
      break;
    case "m³":
      ret = input / 1759.754;
      break;
    case "in³":
      ret = input * 34.677;
      break;
    case "ft³":
      ret = input / 49.831;
      break;
    case "yd³":
      ret = input / 1345.428;
      break;
    case "fl oz":
      ret = input * 20;
      break;
    case "pt":
      ret = input;
      break;
    case "gal":
      ret = input / 8;
      break;
    case "fl oz (US)":
      ret = input * 19.125;
      break;
    case "pt (US)":
      ret = input * 1.201;
      break;
    case "gal (US)":
      ret = input / 6.661;
      break;
  }
  //return conversion
  return ret;
}


// Gallon Conversions
function convertGAL(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 4546.09;
      break;
    case "L":
      ret = input * 4.546;
      break;
    case "m³":
      ret = input / 219.969;
      break;
    case "in³":
      ret = input * 277.419;
      break;
    case "ft³":
      ret = input / 6.229;
      break;
    case "yd³":
      ret = input / 168.179;
      break;
    case "fl oz":
      ret = input * 160;
      break;
    case "pt":
      ret = input * 8;
      break;
    case "gal":
      ret = input;
      break;
    case "fl oz (US)":
      ret = input * 153.722;
      break;
    case "pt (US)":
      ret = input * 9.608;
      break;
    case "gal (US)":
      ret = input / 1.201;
      break;
  }
  //return conversion
  return ret;
}


// Fluide Ounce US Conversions
function convertFLUS(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 28.413;
      break;
    case "L":
      ret = input / 33.814;
      break;
    case "m³":
      ret = input / 33814.023;
      break;
    case "in³":
      ret = input * 1.805;
      break;
    case "ft³":
      ret = input / 957.506;
      break;
    case "yd³":
      ret = input / 25852.675;
      break;
    case "fl oz":
      ret = input * 1.041;
      break;
    case "pt":
      ret = input * 19.125;
      break;
    case "gal":
      ret = input / 153.722;
      break;
    case "fl oz (US)":
      ret = input;
      break;
    case "pt (US)":
      ret = input / 16;
      break;
    case "gal (US)":
      ret = input / 128;
      break;
  }
  //return conversion
  return ret;
}


// Pint US Conversions
function convertPTUS(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 568.261;
      break;
    case "L":
      ret = input / 1.76;
      break;
    case "m³":
      ret = input / 1759.754;
      break;
    case "in³":
      ret = input * 34.677;
      break;
    case "ft³":
      ret = input / 49.831;
      break;
    case "yd³":
      ret = input / 1615.792;
      break;
    case "fl oz":
      ret = input * 16.653;
      break;
    case "pt":
      ret = input / 1.201;
      break;
    case "gal":
      ret = input / 9.608;
      break;
    case "fl oz (US)":
      ret = input * 16;
      break;
    case "pt (US)":
      ret = input;
      break;
    case "gal (US)":
      ret = input / 8;
      break;
  }
  //return conversion
  return ret;
}


// Gallon US Conversions
function convertGALUS(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 3785.412;
      break;
    case "L":
      ret = input * 3.785;
      break;
    case "m³":
      ret = input / 264.172;
      break;
    case "in³":
      ret = input * 231;
      break;
    case "ft³":
      ret = input / 7.481;
      break;
    case "yd³":
      ret = input / 201.974;
      break;
    case "fl oz":
      ret = input * 133.228;
      break;
    case "pt":
      ret = input * 6.661;
      break;
    case "gal":
      ret = input / 1.201;
      break;
    case "fl oz (US)":
      ret = input * 128;
      break;
    case "pt (US)":
      ret = input * 8;
      break;
    case "gal (US)":
      ret = input;
      break;
  }
  //return conversion
  return ret;
}

// This function determines which unit is being converted from and then calls
// its related fuction to execute the proper conversion
function calculateConversion(input, primaryUnit, secondaryUnit){

  switch(primaryUnit){
    case "mL":
      ret = convertCM(input, secondaryUnit);
      break;
    case "L":
      ret = convertDM(input, secondaryUnit);
      break;
    case "m³":
      ret = convertME(input, secondaryUnit);
      break;
    case "in³":
      ret = convertIN(input, secondaryUnit);
      break;
    case "ft³":
      ret = convertFT(input, secondaryUnit);
      break;
    case "yd³":
      ret = convertYD(input, secondaryUnit);
      break;
    case "fl oz":
      ret = convertFL(input, secondaryUnit);
      break;
    case "pt":
      ret = convertPT(input, secondaryUnit);
      break;
    case "gal":
      ret = convertGAL(input, secondaryUnit);
      break;
    case "fl oz (US)":
      ret = convertFLUS(input, secondaryUnit);
      break;
    case "pt (US)":
      ret = convertPTUS(input, secondaryUnit);
      break;
    case "gal (US)":
      ret = convertGALUS(input, secondaryUnit);
      break;
  }
  return ret;
}

//main function
function convertUnits(){
  var input = document.getElementById("primaryInput").value;
  var primaryUnit = document.getElementById("primarySelect").value;
  var secondaryUnit = document.getElementById("secondarySelect").value;
  ret = calculateConversion(input, primaryUnit, secondaryUnit);
  document.getElementById("secondaryInput").value = calculateConversion(input, primaryUnit, secondaryUnit);

}

//File ends here
