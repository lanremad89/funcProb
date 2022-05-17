/* Write a JavaScript function that accepts a string as a 
parameter and counts the number of vowels within the string.*/

// create a function 'numOfVowels'
const numOfVowels = str => {
// then create a 'count' variable to count the number of vowels in a string  
    let count = 0
/* the toLowerCase method is used to make the string of words all lower case to be accounted for.
 Also the split method will be use to grab each word indivually */     
    const strWords = str.toLowerCase().split('')
// Below we have the list/array of vowels    
    const vowels = ['a', 'e', 'i', 'o', 'u']
// Now the program will loop through each letter in the string to find a vowel   
      for (let i = 0; i < strWords.length; i++) {
          if (vowels.includes(strWords[i])) {
// the 'count++' will add 1 each time it encounters a vowel in the string
              count++
          }
      }
      return count
  }
 
  console.log(numOfVowels("Time is of the essence. I tried to teach you but, I might need some lessons"))