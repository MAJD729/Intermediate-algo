// pesudo code:
// define array X
// define var Shift
// make a for loop that loop through the array
// push i to the left
// print the result

//code:
var X = [2,1,6,4,-7]
var Shift = []
 for (var i = x.length - 1; i >= 0; i--){
   Shift.push(X[i]);
}
console.log(Shift);

// Diagram:
// i = 1 ...result Shift [-7,2,1,6,4]
// i = 2 ...result Shift [-7,4,2,1,6]
// i = 3 ...result Shift [-7,4,6,2,1]
// i = 4 ...result Shift [-7,4,6,1,2]
