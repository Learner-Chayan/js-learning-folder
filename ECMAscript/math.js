//Math Properties
/**
 * 1 	E
Euler's constant and the base of natural logarithms, approximately 2.718
2 	LN2
Natural logarithm of 2, approximately 0.693
3 	LN10
Natural logarithm of 10, approximately 2.302
4 	LOG2E
Base 2 logarithm of E, approximately 1.442
5 	LOG10E
Base 10 logarithm of E, approximately 0.434
6 	PI
Ratio of the circumference of a circle to its diameter, approximately 3.14159
7 	SQRT1_2
Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707
8 	SQRT2
Square root of 2, approximately 1.414
 */


//Exponential Functions
/**
 * 1 	Math.pow(x, y)

Returns x raised to the power y
2 	Math.sqrt(x)

Returns the square root of the number x
3 	Math.cbrt(x)

This method returns the cube root of a number x
4 	Math.exp(x)

Equivalent to Math.pow(Math.E, x)
5 	Math.expm1(x)

Equivalent to Math.exp(x) – 1
6 	Math.hypot(x1, x2,...)

Returns the square root of the sum of arguments
 */


 //Math.pow(x, y) 
    console.log("---Math.pow()---") 
    console.log("math.pow(2,3) : "+Math.pow(2, 3)) 
    console.log("Math.pow(1.7, 2.3) : "+Math.pow(1.7, 2.3))    


//Math.sqrt ( x );  
    console.log("---Math.sqrt()---");
    console.log("Math.sqrt(16) : "+Math.sqrt(16)); // output : 4 
    console.log("Math.sqrt(15.5) : "+Math.sqrt(15.5))   //output : 3.9370039370059056  


//Math.cbrt ( x );   This method returns the cube root of a number.
    console.log("---Math.cbrt()---") 
    console.log("Math.cbrt(27) : "+Math.cbrt(27)) //output : 3
    console.log("Math.cbrt(22) : "+Math.cbrt(22)) // output : 2.8020......



//Math.exp ( x ) ;   [don't understand yet]
    console.log("---Math.exp()---") 
    console.log("Math.exp(1) : "+Math.exp(1)) //Math.exp(1) : 2.718281828459045
    console.log("Math.exp(5.5) : "+Math.exp(5.5))    


//Read Logarithmic functions from above . I am skipping these here . 




//Miscellaneous Algebraic Functions [most used function]
//Math.abs( x ) ;   
    console.log("---Math.abs()---") 
    console.log("Math.abs(-5.5) : "+Math.abs(-5.5)) //output : 5.5
    console.log("Math.abs(5.5) : "+Math.abs(5.5))   //output: 5.5


//Math.sign( x ) ;     //Returns -1 if x is negative; 1 if x is positive;0 if x is 0
    console.log("---Math.sign()---") 
    console.log("Math.sign(-10.5) : "+Math.sign(-10.5)) //-1
    console.log("Math.sign(6.77) : "+Math.sign(6.77))    //1


//Math.ceil ( x ) ;      // This method returns the smallest integer greater than or equal to a number.
    console.log("---Math.ceil()---") 
    console.log("Math.ceil(2.2) : "+Math.ceil(2.2)) //output : 3
    console.log("Math.ceil(-3.8) : "+Math.ceil(-3.8))    //output : 3


//Math.floor( x ) ;       //The floor of x: the largest integer less than or equal to x.
    console.log("---Math.floor()---") 
    console.log("Math.floor(2.8) : "+Math.floor(2.8))  //output : 2
    console.log("Math.floor(-3.2) : "+Math.floor(-3.2))  //output: -4


//Math.trunc( x ) ;      //It returns the integral part of x (all fractional digits are removed).
    console.log("---Math.trunc()---") 
    console.log("Math.trunc(7.7) : "+Math.trunc(7.7))  //output: 7
    console.log("Math.trunc(-5.8) : "+Math.trunc(-5.8)) //output: -5


//Math.round( x ) ;   //It rounds off the number to the nearest integer.   
    console.log("---Math.round()---") 
    console.log("Math.round(7.2) : "+Math.round(7.2))  //output: 7
    console.log("Math.round(-7.7) : "+Math.round(-7.7)) //output: 8
    console.log(Math.round(7.5)); //output: 8


//Math.min( x1,x2,… ) ;       
    console.log("---Math.min()---") 
    console.log("Math.min(1, 2) : "+Math.min(1, 2))  //output: 1
    console.log("Math.min(3, 0.5, 0.66) : "+Math.min(3, 0.5, 0.66)) //output: 0.5 
    console.log("Math.min(3, 0.5, -0.66) : "+Math.min(3, 0.5, -0.66))  //output: -0.66


//Math.max(x1,x2,x3..)      
    console.log("---Math.max()---") 
    console.log("Math.max(3, 0.5, 0.66) : "+Math.max(3, 0.5, 0.66))  //output: 3
    console.log("Math.max(-3, 0.5, -0.66) : "+Math.max(-3, 0.5, -0.66)) //output: 0.5



//Math.random()
    var value1 = Math.random();  
    console.log("First Test Value : " + value1 ); 
    var value2 = Math.random();  
    console.log("Second Test Value : " + value2 ); 
    var value3 = Math.random();  
    console.log("Third Test Value : " + value3 ); 
    var value4 = Math.random(); 
    console.log("Fourth Test Value : " + value4 );

    /**
     * First Test Value : 0.5782922627404332 
        Second Test Value : 0.5624510529451072 
        Third Test Value : 0.9336334094405174 
        Fourth Test Value : 0.4002739654388279
     */