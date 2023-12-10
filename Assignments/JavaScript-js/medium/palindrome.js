/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.replaceAll(/[^A-Za-z0-9]/g,"")
  str=str.toLowerCase()
  let i = str.length - 1
  let j = 0
  let str2 = ""
  while (i >= 0) {
    str2 = str2.concat(str[i])
    j++
    i--
  }
  if (str === str2) {
    return true;
  } else {
    return false
  }
}
isPalindrome('rAce car!')
module.exports = isPalindrome;
