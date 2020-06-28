// pesudo code:
// define variable X
// make a for loop that loop through i between 200 and 2700
// if statement for addition exept the numbers that are able to be divided to 3 or 5  but not both
// print the result


// code:

var X = 0;
for (var i= 200; i<=2700; i++){
  if ( i%3 == 0){
   
    X += i
    
    console.log(X);
  } else {if(i%5==0){
    X += i
      
      console.log(X);}}
  }

  // Diagram:
  // i = 201 ...result X = 200+201
  // i = 203 ...result X = 200+201+203
  // i = 205 ...result X = 200+201+203+205
  // i = 207 ...result X = 200+201+203+205+207
  //.....till i = 2700