function isPalindrome(s) {
  var noSpace = s.replace( /\s/g, "");

      var stringReverse = noSpace.split("").reverse().join("");
      // var stringReverse = noSpace.split("").reverse();

      console.log(stringReverse);// console.log(stringReverse);
    console.log(noSpace);
    return noSpace == stringReverse;


}
isPalindrome("I am confused")
module.exports = isPalindrome;

