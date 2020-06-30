// pesudo code:
// define a function 
// define a variable Z
// give X as an argument
// define X as an object
// make a loop throug the object
// if statement to print the number of the letters in the word


//code:
function LongestWord(X)
{var Z = X.split(" ");
var max = 0;

for(var i=0; i<Z.length; i++){
    if(Z[i].length > max){
        max = Z[i].length;
    }
}
return max;

}

var X = "The quick brown fox jumped over the lazy dog";

//Diagram:
// i = 5 ... result max = 6
