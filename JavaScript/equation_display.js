
function equation_display(unit1, unit2)
{

    first
    second

    switch(unit1){
        case "Celsius":
          first = 0;
          break;
        case "Kelvin":
            first = 1;
          break;
        case "Fahrenheit":
            first = 2;
          break;
    }

    switch(unit2){
        case "Celsius"
            second = 0;
          break;
        case "Kelvin":
            second = 1;
          break;
        case "Fahrenheit":
            second = 2;
          break;
    }

    /*
     * cel-cel, in-ft, in-yd
     * ft-in, ft-ft, ft-yd
     * yd-in, yd-ft, yd-yd
     */

    images = [
        ["CeltoCel.png", "inToFt.png", "inToYd.png"],
        ["inToFt.png", "same.png", "ftToYd.png"],
        ["inToYd.png", "ftToYd.png", "same.png"]
    ]

    return images[first, second];

}
