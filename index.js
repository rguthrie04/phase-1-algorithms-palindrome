function isPalindrome(word) {
  const splitString = word.split("")
  const reverseArray = splitString.reverse()
  const reverseWord = reverseArray.join("")
  
  if (word === reverseWord) {
    return true
  } else {
    return false
  }

}

/* 
  Add your pseudocode here
  // splitString into Array
  Reverse Arrayu
  rejoin array into string

  if (word === reverseWord) {
    return true
  } else{
    return false
  }


*/

/*
  Add written explanation of your solution here
  1) break (word) into an Array. Create a copy of that array, but reversed (look for a built in function), join back to string.  Write and If statement that compares word === reversed word and write a true/false statement.

*/

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
