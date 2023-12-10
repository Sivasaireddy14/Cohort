/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let obj = {}
  str1=str1.toLowerCase()
  str2=str2.toLowerCase()
  if (str1.length !== str2.length) {
    return false
  }
  for (let i = 0; i < str1.length; i++) {
    if (Object.keys(obj).includes(str1[i])) {
      obj[str1[i]] += 1
    } else {
      obj[str1[i]] = 1
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (Object.keys(obj).includes(str2[i])) {
      obj[str2[i]] -= 1
      if (obj[str2[i]] === 0) { delete obj[str2[i]] }
    } else {
      obj[str2[i]] = 1
    }
  }
  if (Object.keys(obj).length === 0) {
    return true
  } else {
    return false
  }
}


module.exports = isAnagram;
