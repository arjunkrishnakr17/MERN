/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  function isalphanumeric(char)
  {
    regex=/^[a-z0-9]+$/i;
    if (regex.test(char))
    {
      return true;
    }
    return false;
  }
  let s2="";
  let s1="";
  for (let i=0;i<str.length;i++)
  {
    if (isalphanumeric(str[i]))
    {
    s1=str[i].toLowerCase()+s1;
    s2+=str[i].toLowerCase();
    }
  }
  if (s1===s2)
  {
    return true;
  }
  console.log(s1);
  return false;
}

module.exports = isPalindrome;
