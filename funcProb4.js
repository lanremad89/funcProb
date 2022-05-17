/* Write a JavaScript function that iterates the integers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers that are multiples of both three and five print "FizzBuzz". */

// create a function 'fizzBuzz'
const fizzBuzz = int => {

    // use a for loop to iterate through integers (1-100)
      for (let i = 0; i <= int; i++) {
       
    // write an if statement to calculate the multiples of both 3 & 5.    
        if ( i%3 === 0 && i%5 === 0 ) {
         
        console.log( i + " FizzBuzz" );
      }
      else if ( i%3 === 0 ) {
       
        console.log(i+ " Fizz" );
      }
      else if ( i%5 === 0 ) {
       
        console.log(i+ " Buzz" );
      }
    // this 'else' statment states that if the integer isn't a multiple of 3 or 5 continue to count    
      else {
        console.log(i);
      }
      }
    }
    // call your function and put in the integer argument
    fizzBuzz(100)