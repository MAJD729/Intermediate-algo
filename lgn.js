// pesudo code:.
// define an array X.
// define an empty array Z.
// define a variable max.
// make a for loop that loops through array X.
// make a for loop that loops through array Z.
// if statement to find the largest number from every sub array.
// print the result.

// code:
var X =[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
var max =0;
var Z = [];

for(var i=0; i<X.length; i++){
  max = X[i][0];
 for(var n=0; n<X[i].length; n++){
   if (X[i][n]>max){
     max = X[i][n];
   }
 }
 Z.push(max);
}

console.log(Z);


// Diagram:
// the result is [ 5, 27, 39, 1001 ]