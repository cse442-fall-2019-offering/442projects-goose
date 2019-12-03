// JavaScript file for volume portion of application
// @author: Damon L

var input = 0;
var output = 0;

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
    case "ac⋅ft":
      ret = input * 8.1071319378991e-10;
      break;
    case "qt (US)":
      ret = input / 946.352946;
      break;
    case "qt":
      ret = input / 1136.5225;
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
    case "ac⋅ft":
      ret = input * 8.1071319378991e-7;
      break;
    case "qt (US)":
      ret = input / 0.946352946;
      break;
    case "qt":
      ret = input / 1.1365225;
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
    case "ac⋅ft":
      ret = input * 0.00081071319378991;
      break;
    case "qt (US)":
      ret = input / 0.000946352946;
      break;
    case "qt":
      ret = input / 0.0011365225;
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
    case "ac⋅ft":
      ret = input * 1.328520899228e-8;
      break;
    case "qt (US)":
      ret = input / 57.75;
      break;
    case "qt":
      ret = input / 69.354858197905;
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
    case "ac⋅ft":
      ret = input * 2.2956841138659e-5;
      break;
    case "qt (US)":
      ret = input / 0.033420138888889;
      break;
    case "qt":
      ret = input / 0.040135913308973;
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
    case "ac⋅ft":
      ret = input * 0.0006198347107438;
      break;
    case "qt (US)":
      ret = input / 0.0012377829218107;
      break;
    case "qt":
      ret = input / 0.0014865153077397;
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
    case "ac⋅ft":
      ret = input * 2.3034844644727e-8;
      break;
    case "qt (US)":
      ret = input / 33.306967385167;
      break;
    case "qt":
      ret = input / 40;
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
    case "ac⋅ft":
      ret = input * 4.6069689289455e-7;
      break;
    case "qt (US)":
      ret = input / 1.665348369258;
      break;
    case "qt":
      ret = input / 40;
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
    case "ac⋅ft":
      ret = input * 3.6855751431564e-6;
      break;
    case "qt (US)":
      ret = input / 0.20816854615725;
      break;
    case "qt":
      ret = input * 4;
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
    case "ac⋅ft":
      ret = input * 2.3975650603255e-8;
      break;
    case "qt (US)":
      ret = input / 32;
      break;
    case "qt":
      ret = input * 38.430397616155;
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
    case "ac⋅ft":
      ret = input * 3.8361040965208e-7;
      break;
    case "qt (US)":
      ret = input / 2;
      break;
    case "qt":
      ret = input / 2.4018998510097;
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
    case "ac⋅ft":
      ret = input * 3.0688832772166e-6;
      break;
    case "qt (US)":
      ret = input * 4;
      break;
    case "qt":
      ret = input / 0.30023748137621;
      break;
  }
  //return conversion
  return ret;
}

function convertACFT(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 1233481837.5475;
      break;
    case "L":
      ret = input * 1233481.8375475;
      break;
    case "m³":
      ret = input * 1233.4818375475;
      break;
    case "in³":
      ret = input * 75271680;
      break;
    case "ft³":
      ret = input * 43560;
      break;
    case "yd³":
      ret = input * 1613.3333333333;
      break;
    case "fl oz":
      ret = input * 43412491.615345;
      break;
    case "pt":
      ret = input * 2170624.5807672;
      break;
    case "gal":
      ret = input * 271328.07259591;
      break;
    case "fl oz (US)":
      ret = input * 41708982.857143;
      break;
    case "pt (US)":
      ret = input * 2606811.4285714;
      break;
    case "gal (US)":
      ret = input * 325851.42857143;
      break;
    case "ac⋅ft":
      ret = input;
      break;
    case "qt (US)":
      ret = input / 7.6722081930415e-7;
      break;
    case "qt":
      ret = input / 9.213937857891e-7;
      break;
  }
  //return conversion
  return ret;
}


function convertQTUS(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 946.352946;
      break;
    case "L":
      ret = input * 0.946352946;
      break;
    case "m³":
      ret = input * 0.000946352946;
      break;
    case "in³":
      ret = input * 57.75;
      break;
    case "ft³":
      ret = input * 0.033420138888889;
      break;
    case "yd³":
      ret = input * 0.0012377829218107;
      break;
    case "fl oz":
      ret = input * 33.30696738516;
      break;
    case "pt":
      ret = input * 1.665348369258;
      break;
    case "gal":
      ret = input * 0.20816854615725;
      break;
    case "fl oz (US)":
      ret = input * 32;
      break;
    case "pt (US)":
      ret = input * 2;
      break;
    case "gal (US)":
      ret = input / 4;
      break;
    case "ac⋅ft":
      ret = input * 7.6722081930415e-7;
      break;
    case "qt (US)":
      ret = input;
      break;
    case "qt":
      ret = input * 0.83267418462899;
      break;
  }
  //return conversion
  return ret;
}


function convertQT(input, secondaryUnit){

  switch(secondaryUnit){
    case "mL":
      ret = input * 1136.5225;
      break;
    case "L":
      ret = input * 1.1365225;
      break;
    case "m³":
      ret = input * 0.0011365225;
      break;
    case "in³":
      ret = input * 69.354858197905;
      break;
    case "ft³":
      ret = input * 0.040135913308973;
      break;
    case "yd³":
      ret = input * 0.0014865153077397;
      break;
    case "fl oz":
      ret = input * 40;
      break;
    case "pt":
      ret = input * 2;
      break;
    case "gal":
      ret = input / 4;
      break;
    case "fl oz (US)":
      ret = input * 38.430397616155;
      break;
    case "pt (US)":
      ret = input * 2.4018998510097;
      break;
    case "gal (US)":
      ret = input * 0.30023748137621;
      break;
    case "ac⋅ft":
      ret = input * 9.213937857891e-7;
      break;
    case "qt (US)":
      ret = input * 1.2009499255049;
      break;
    case "qt":
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
    case "ac⋅ft":
      ret = convertACFT(input, secondaryUnit);
      break;
    case "qt (US)":
      ret = convertQTUS(input, secondaryUnit);
      break;
    case "qt":
      ret = convertQT(input, secondaryUnit);
      break;
  }
  return ret;
}

//main function
function convertUnits(){
  input = document.getElementById("primaryInput").value;
  var primaryUnit = document.getElementById("primarySelect").value;
  var secondaryUnit = document.getElementById("secondarySelect").value;
  output = calculateConversion(input, primaryUnit, secondaryUnit);
  document.getElementById("secondaryInput").value = output;
}

//File ends here
