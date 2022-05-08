//Example − Lambda Expression / arrow function
//note : arrow function is always anonymous (which function don't have name)

//([param1, parma2,…param n] )=>statement;

var msg = ()=> { 
    console.log("function invoked") 
 } 
 msg() 
//.................................................
 //Syntactic Variations
// Optional parentheses for a single parameter.
var msg = x=> { 
    console.log(x) 
 } 
 msg(10)
//....................................................
 //Optional braces for a single statement. Empty parentheses for no parameter.
 var disp = ()=>console.log("Hello World") 
disp();