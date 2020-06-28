// pesudo code:
// define a variable X.
// make a for loop that loop between 1 and 135.
// if statement for the numbers that are divisible by 5 and change it to word Bizz.
// if statement for the numbers that are divisible by 3 and change it to word Fizz.
// if statement for the numbers that are divisible by 3 and 5 and change it to word FizzBuzz.
// print the result.


// code:

var X=[];
for (var i = 1; i <= 135; i ++){
if ( i % 3 === 0 && i % 5 === 0 ){
    X[i-1] = "FizzBuzz"; 
  } else if ( i % 5 === 0){
    X[i-1] = "Buzz";
  } else if (  i % 3 === 0) {
    X[i-1] = "Fizz"
  } else {
   X[i-1]=i
  }
}
console.log(X);

// Digaram:
// i = 3 ...result X-1= "Fizz"
// i = 5 ...result X-1= "Buzz"
// i = 6 ...result X-1= "Fizz"
// i = 9 ...result X-1= "Fizz"
//.
//.
//.
// i = 135 ...result X-1= "FizzBuzz"


