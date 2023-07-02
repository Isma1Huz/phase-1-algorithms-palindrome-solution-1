function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  

  



*/
//create an array from the input string
//reverse the array
//create a string from the reversed array
//
function reversed(string){
  //return the reversed string
  return string.split('').reverse().join('')
}
function isPalindrome(string){
  // If one of the condition is true it will return true 
  return  string === reversed(string) ? true : false
}
// calling the function 
isPalindrome('tobor')


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
