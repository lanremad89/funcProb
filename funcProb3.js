/* Write a JavaScript function that accepts two arguments, a string and a letter and
the function will count the number of occurrences of the specified letter within the string. */

// create a function
const strLet = (str, letter) => {
    // the 'count' variable will count the number of occurences of the specfic letter chosen
      let count = 0
    // now we will loop through the string to find the letter occurences  
      for (let i = 0; i < str.length; i++) {
    // the 'charAt' method is used to find character index within a string
        if (str.charAt(i) === letter) {
    // the 'count++' will increment everytime the letter of your choice is found in the string    
            count++
        }
      }
      return count
    }
    
    console.log(strLet('please excuse my dear aunt sally', 'l'))