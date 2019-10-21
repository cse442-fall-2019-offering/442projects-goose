// JavaScript file for volume portion of application
// @author: Damon L

// This function determines which unit is being converted from and then calls
// its related fuction to execute the proper conversion
function convertVolume(){
  //unit we are converting from
  unit1 = document.getElementById("unit1").value;

  switch(unit1){
    case "cubicCM":
      ret = convertCM();
      break;
    case "cubicDM":
      ret = convertDM();
      break;
    case "cubicME":
      ret = convertME();
      break;
    case "cubicIN":
      ret = convertIN();
      break;
    case "cubicFT":
      ret = convertFT();
      break;
    case "cubicYD":
      ret = convertYD();
      break;
    case "fluidOZ":
      ret = convertFL();
      break;
    case "pint":
      ret = convertPT();
      break;
    case "gallon":
      ret = convertGAL();
      break;
    case "fluidOZUS":
      ret = convertFLUS();
      break;
    case "pintUS":
      ret = convertPTUS();
      break;
    case "gallonUS":
      ret = convertGALUS();
      break;
  }
  //display conversion
  document.getElementById("second").value = ret;
}


//Cubic Centimeter (Milliliter) Conversions
function convertCM(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input;
      break;
    case "cubicDM":
      ret = input / 1000;
      break;
    case "cubicME":
      ret = input / 1e+6;
      break;
    case "cubicIN":
      ret = input / 16.387;
      break;
    case "cubicFT":
      ret = input / 28316.847;
      break;
    case "cubicYD":
      ret = input / 764554.858;
      break;
    case "fluidOZ":
      ret = input / 28.413;
      break;
    case "pint":
      ret = input / 568.261;
      break;
    case "gallon":
      ret = input / 4546.09;
      break;
    case "fluidOZUS":
      ret = input / 29.574;
      break;
    case "pintUS":
      ret = input / 473.176;
      break;
    case "gallonUS":
      ret = input / 3785.412;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Decimeter (Liter) Conversions
function convertDM(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 1000;
      break;
    case "cubicDM":
      ret = input;
      break;
    case "cubicME":
      ret = input / 1000;
      break;
    case "cubicIN":
      ret = input * 61.024;
      break;
    case "cubicFT":
      ret = input / 28.317;
      break;
    case "cubicYD":
      ret = input / 764.555;
      break;
    case "fluidOZ":
      ret = input * 35.195;
      break;
    case "pint":
      ret = input * 1.76;
      break;
    case "gallon":
      ret = input / 4.546;
      break;
    case "fluidOZUS":
      ret = input * 33.814;
      break;
    case "pintUS":
      ret = input * 2.113;
      break;
    case "gallonUS":
      ret = input / 3.785;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Meter Conversions
function convertME(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 1e+6;
      break;
    case "cubicDM":
      ret = input * 1000;
      break;
    case "cubicME":
      ret = input;
      break;
    case "cubicIN":
      ret = input * 61023.744;
      break;
    case "cubicFT":
      ret = input * 35.315;
      break;
    case "cubicYD":
      ret = input * 1.308;
      break;
    case "fluidOZ":
      ret = input * 35195.08;
      break;
    case "pint":
      ret = input * 1759.754;
      break;
    case "gallon":
      ret = input * 219.969;
      break;
    case "fluidOZUS":
      ret = input * 33814.023;
      break;
    case "pintUS":
      ret = input * 2113.376;
      break;
    case "gallonUS":
      ret = input * 264.172;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Inch Conversions
function convertIN(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 16.387;
      break;
    case "cubicDM":
      ret = input / 61.024;
      break;
    case "cubicME":
      ret = input / 61023.744;
      break;
    case "cubicIN":
      ret = input;
      break;
    case "cubicFT":
      ret = input / 1728;
      break;
    case "cubicYD":
      ret = input / 46656;
      break;
    case "fluidOZ":
      ret = input / 1.734;
      break;
    case "pint":
      ret = input / 34.677;
      break;
    case "gallon":
      ret = input / 277.419;
      break;
    case "fluidOZUS":
      ret = input / 1.805;
      break;
    case "pintUS":
      ret = input / 28.875;
      break;
    case "gallonUS":
      ret = input / 231;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Feet Conversions
function convertFT(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 28316.847;
      break;
    case "cubicDM":
      ret = input * 28.317;
      break;
    case "cubicME":
      ret = input / 61023.744;
      break;
    case "cubicIN":
      ret = input * 1728;
      break;
    case "cubicFT":
      ret = input;
      break;
    case "cubicYD":
      ret = input / 27;
      break;
    case "fluidOZ":
      ret = input * 996.614;
      break;
    case "pint":
      ret = input * 49.831;
      break;
    case "gallon":
      ret = input * 6.229;
      break;
    case "fluidOZUS":
      ret = input * 957.506;
      break;
    case "pintUS":
      ret = input * 59.844;
      break;
    case "gallonUS":
      ret = input * 7.481;
      break;
  }
  //return conversion
  return ret;
}


//Cubic Yard Conversions
function convertYD(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 764554.858;
      break;
    case "cubicDM":
      ret = input * 764.555;
      break;
    case "cubicME":
      ret = input / 1.308;
      break;
    case "cubicIN":
      ret = input * 46656;
      break;
    case "cubicFT":
      ret = input * 27;
      break;
    case "cubicYD":
      ret = input;
      break;
    case "fluidOZ":
      ret = input * 26908.569;
      break;
    case "pint":
      ret = input * 1345.428;
      break;
    case "gallon":
      ret = input * 168.179;
      break;
    case "fluidOZUS":
      ret = input * 25852.675;
      break;
    case "pintUS":
      ret = input * 1615.792;
      break;
    case "gallonUS":
      ret = input * 201.974;
      break;
  }
  //return conversion
  return ret;
}


// Fluid Ounce Conversions
function convertFL(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 28.413;
      break;
    case "cubicDM":
      ret = input / 35.195;
      break;
    case "cubicME":
      ret = input / 35195.08;
      break;
    case "cubicIN":
      ret = input * 1.734;
      break;
    case "cubicFT":
      ret = input / 996.614;
      break;
    case "cubicYD":
      ret = input / 26908.569;
      break;
    case "fluidOZ":
      ret = input;
      break;
    case "pint":
      ret = input / 20;
      break;
    case "gallon":
      ret = input / 160;
      break;
    case "fluidOZUS":
      ret = input / 1.041;
      break;
    case "pintUS":
      ret = input / 16.653;
      break;
    case "gallonUS":
      ret = input / 133.228;
      break;
  }
  //return conversion
  return ret;
}


// Pint Conversions
function convertPT(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 568.261;
      break;
    case "cubicDM":
      ret = input / 1.76;
      break;
    case "cubicME":
      ret = input / 1759.754;
      break;
    case "cubicIN":
      ret = input * 34.677;
      break;
    case "cubicFT":
      ret = input / 49.831;
      break;
    case "cubicYD":
      ret = input / 1345.428;
      break;
    case "fluidOZ":
      ret = input * 20;
      break;
    case "pint":
      ret = input;
      break;
    case "gallon":
      ret = input / 8;
      break;
    case "fluidOZUS":
      ret = input * 19.125;
      break;
    case "pintUS":
      ret = input * 1.201;
      break;
    case "gallonUS":
      ret = input / 6.661;
      break;
  }
  //return conversion
  return ret;
}


// Gallon Conversions
function convertGAL(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 4546.09;
      break;
    case "cubicDM":
      ret = input * 4.546;
      break;
    case "cubicME":
      ret = input / 219.969;
      break;
    case "cubicIN":
      ret = input * 277.419;
      break;
    case "cubicFT":
      ret = input / 6.229;
      break;
    case "cubicYD":
      ret = input / 168.179;
      break;
    case "fluidOZ":
      ret = input * 160;
      break;
    case "pint":
      ret = input * 8;
      break;
    case "gallon":
      ret = input;
      break;
    case "fluidOZUS":
      ret = input * 153.722;
      break;
    case "pintUS":
      ret = input * 9.608;
      break;
    case "gallonUS":
      ret = input / 1.201;
      break;
  }
  //return conversion
  return ret;
}


// Fluide Ounce US Conversions
function convertFLUS(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 28.413;
      break;
    case "cubicDM":
      ret = input / 33.814;
      break;
    case "cubicME":
      ret = input / 33814.023;
      break;
    case "cubicIN":
      ret = input * 1.805;
      break;
    case "cubicFT":
      ret = input / 957.506;
      break;
    case "cubicYD":
      ret = input / 25852.675;
      break;
    case "fluidOZ":
      ret = input * 1.041;
      break;
    case "pint":
      ret = input * 19.125;
      break;
    case "gallon":
      ret = input / 153.722;
      break;
    case "fluidOZUS":
      ret = input;
      break;
    case "pintUS":
      ret = input / 16;
      break;
    case "gallonUS":
      ret = input / 128;
      break;
  }
  //return conversion
  return ret;
}


// Pint US Conversions
function convertPTUS(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 568.261;
      break;
    case "cubicDM":
      ret = input / 1.76;
      break;
    case "cubicME":
      ret = input / 1759.754;
      break;
    case "cubicIN":
      ret = input * 34.677;
      break;
    case "cubicFT":
      ret = input / 49.831;
      break;
    case "cubicYD":
      ret = input / 1615.792;
      break;
    case "fluidOZ":
      ret = input * 16.653;
      break;
    case "pint":
      ret = input / 1.201;
      break;
    case "gallon":
      ret = input / 9.608;
      break;
    case "fluidOZUS":
      ret = input * 16;
      break;
    case "pintUS":
      ret = input;
      break;
    case "gallonUS":
      ret = input / 8;
      break;
  }
  //return conversion
  return ret;
}


// Gallon US Conversions
function convertGALUS(){
  //input to be converted
  input = document.getElementById("first").value;
  //unit we are converting to
  unit2 = document.getElementById("unit2").value;

  switch(unit2){
    case "cubicCM":
      ret = input * 3785.412;
      break;
    case "cubicDM":
      ret = input * 3.785;
      break;
    case "cubicME":
      ret = input / 264.172;
      break;
    case "cubicIN":
      ret = input * 231;
      break;
    case "cubicFT":
      ret = input / 7.481;
      break;
    case "cubicYD":
      ret = input / 201.974;
      break;
    case "fluidOZ":
      ret = input * 133.228;
      break;
    case "pint":
      ret = input * 6.661;
      break;
    case "gallon":
      ret = input / 1.201;
      break;
    case "fluidOZUS":
      ret = input * 128;
      break;
    case "pintUS":
      ret = input * 8;
      break;
    case "gallonUS":
      ret = input;
      break;
  }
  //return conversion
  return ret;
}


function switchUnits(){
  hold = document.getElementById("unit1").value;
  document.getElementById("unit1").value = document.getElementById("unit2").value;
  document.getElementById("unit2").value = hold;
}