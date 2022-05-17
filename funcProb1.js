/* create a function that accepts a string as a parameter and 
find the longest word within the string.*/

const longestWord = str => {
    // declare a variable 'strWords' & use the split method to space out words indivdually
    const strWords = str.split(' ');
    // the 'longest' variable is used to store the longest word into it 
      let longest = '';
    // will use the for loop to find the longest word by checking if each word in the string  
      for(let i = 0; i < strWords.length; i++) {
        if(strWords[i].length > longest.length) {
            longest = strWords[i]
        }
      }
    // in the function we will return the variable 'longest' to find our word
        return longest;
    
  }
  
  console.log(longestWord("I've got everybody watching because theres diamonds on my chain"))