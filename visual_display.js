/*this takes in the two converted values and scales images based on the 
 *relative sizes
 */
function visual_display(unit1, unit2)
{

    var first
    var second

    switch(unit1){
        case "inch":
          first = 0;
          break;
        case "feet":
            first = 1;
          break;
        case "yard":
            first = 2;
          break;
    }

    switch(unit2){
        case "inch":
            second = 0;
          break;
        case "feet":
            second = 1;
          break;
        case "yard":
            second = 2;
          break;
    }

    /*
     * in-in, in-ft, in-yd
     * ft-in, ft-ft, ft-yd
     * yd-in, yd-ft, yd-yd
     */

    var images = [
        ["same.png", "inToFt.png", "inToYd.png"],
        ["inToFt.png", "same.png", "ftToYd.png"],
        ["inToYd.png", "ftToYd.png", "same.png"]
    ]

    return images[first, second];
    
}