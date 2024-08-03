/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  array1=str1.split("");
  array2=str2.split("")
  n1=array1.sort().join("");
  n2=array2.sort().join("");
  n1=n1.toLowerCase();
  n2=n2.toLowerCase();
  console.log("Sorted str1:", n1);
  console.log("Sorted str2:", n2);
  if (n1===n2)
  {
    return true;
  }
  return false;


}



module.exports = isAnagram;
