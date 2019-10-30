//JavaScript Function to limit the input
//@author: Damon L

function limit(element){
  var max_chars = 7;

  if(element.value.length > max_chars){
    element.value = element.value.substr(0, max_chars);
  }
}

//End of file
