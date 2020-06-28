// pesudo code:
// define a vriable X
// for loop through i
// add two elements from i to X
// print the result

//code:

var  X = [0,1];
for(var i = 0; i <= 30; i++) {

       if(i>=2){X[i]=X[i-1] + X[i-2]}
       console.log(X[i]);
   }


   //Diagram
   // i = 2 ...result X = 1
   // i = 3 ...result X = 2
   //.
   //.
   //.
   //.
   //.
   // i = 30 ... result X = 832040
