
module.exports = function check(str, bracketsConfig) {
  // your solution
  var stackArray = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    stackArray[i] = bracketsConfig[i].join("");
  }
  for (var j = 0; j < str.length;) {
    var brackets = str.substring(j, j + 2);
    if (stackArray.includes(brackets)) {
      str = str.replace(brackets, "");
      j = 0;
    }
    else {
      j++;
    }
  }
  return str.length == 0;
}
