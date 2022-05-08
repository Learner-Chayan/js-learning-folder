//Functions that are not bound to an identifier (function name) are called as anonymous functions.



//Example − Anonymous Function
var f = function()
{
    console.log('Hello , I am anonymous function');
}
f(); // calling anonymouse function 

//.....................................................................
//Example − Anonymous Parameterized Function
var func = function(x,y)
{
    return x*y;
}
console.log('product of 10 and 20 is = '+func(10,20));

//....................................................................
//Example − Function Constructor 

//var variablename = new Function(Arg1, Arg2..., "Function Body"); 
var funct = new Function("x","y","return x+y"); // Here Function F is "F" not "f" ... Capital letter
console.log('summation result from function constructor is : 10+20 = '+funct(10,20));