document.getElementById("button1").addEventListener("click", function() {
  var data = getUserInput();
  if(data !== null){
    appendToHistory(data[0], data[1], convert(data[0], data[1]));
  }
});

function appendToHistory(originalNumber, base, convertedNumber){
  var history = document.getElementById("history");
  var node = document.createElement("p");
  node.appendChild(document.createTextNode(originalNumber + " in base " + base + " is: " + convertedNumber.toString()));
  history.insertBefore(node, history.firstChild);
}

function getUserInput(){
  var radix;
  var number = parseInt(prompt("Give me a number"));
  if (number !== null && !isNaN(number)) {
    radix = parseInt(prompt("Give me a base to convert to (up to 62)"));
    if (radix !== null && !isNaN(radix)) {
      return [number, radix];
    }
    else{
      incorrectNumberError("base");
      return null;
    }
  }
  else {
    incorrectNumberError("number");
    return null;
  }
}

function convert(number, radix){
  var output = "";
  var modulo;
  while (number !== 0) {
    var modulo = number % radix;
    if (modulo >= 10 && modulo <= 35) {
      output = String.fromCharCode((modulo - 10) + "A".charCodeAt(0)) + output;
    }
    else if (modulo >= 36 && modulo <= 61){
      output = String.fromCharCode((modulo - 36) + "a".charCodeAt(0)) + output;
    }
    else {
      output = number % radix + output;
    }
    number = Math.floor(number / radix);
  }
  return output;
}

function incorrectNumberError(dataType){
  alert("The " + dataType + " you gave is invalid");
}
