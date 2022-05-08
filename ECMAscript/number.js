let n = Number.EPSILON; //The smallest interval between two representable numbers.
let maxSN = Number.MAX_SAFE_INTEGER; //The maximum safe integer in JavaScript (2^53 - 1).
console.log(n); 
console.log(maxSN);

n = Number.MAX_VALUE; console.log("The largest positive representable number- "+n); //The largest positive representable number.
n = Number.MIN_SAFE_INTEGER; console.log('The minimum safe integer in JavaScript = '+n);//The minimum safe integer in JavaScript (-(2^53 - 1)).
n = Number.MIN_VALUE; console.log('The smallest positive representable number - that is, the positive number closest to zero ='+n);
n = Number.NaN;console.log('Special "not a number" value = '+n);



//NUMBERS METHOD ...................................
/**
 * 1 	Number.isNaN()
Determines whether the passed value is NaN.
2 	Number.isFinite()
Determines whether the passed value is a finite number.
3 	Number.isInteger()
Determines whether the passed value is an integer.
4 	Number.isSafeInteger()
Determines whether the passed value is a safe integer (number between -(253 - 1) and 253- 1)
5 	Number.parseFloat(string)
The value is the same as parseFloat() of the global object
6 	Number.parseInt(string)
The value is the same as parseInt() of the global object
 * 
 */



 var num = 101;
 var notNum = '101';
 console.log('isNaN() = '+Number.isNaN(num));
 console.log(Number.isNaN());
 // NOTE : please don't use it . Because it is returning false for maximum all values and confusing us . 
 /**
  * isNaN(NaN);       // true
    isNaN(undefined); // true
    isNaN({});        // true

    isNaN(true);      // false
    isNaN(null);      // false
    isNaN(37);        // false

    // strings
    isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
    isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
    isNaN("");        // false: the empty string is converted to 0 which is not NaN
    isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN

    // This is a false positive and the reason why isNaN is not entirely reliable
    isNaN("blabla")   // true: "blabla" is converted to a number. Parsing this as a number fails and returns NaN
  */

  console.log("101 is a integar ? = "+Number.isInteger(num));
  console.log("'101' is integar ? = "+Number.isInteger(notNum));
  console.log("'101' parse float result is = "+Number.parseFloat(notNum));
  console.log("101 parse float result is = "+Number.parseFloat(num));

  console.log("101 parseInt value is = "+Number.parseInt(num));
  console.log("50.20 parseInt value is = "+Number.parseInt(50.20));



  //..........................................................................................................
  //Number Instances Methods
  /**
* 1 toExponential()
Returns a string representing the number in exponential notation
2 	toFixed()
Returns a string representing the number in fixed-point notation
3 	toLocaleString()
Returns a string with a language sensitive representation of this number
4 	toPrecision()
Returns a string representing the number to a specified precision in fixed-point or exponential notation
5 	toString()
Returns a string representing the specified object in the specified radix (base)
6 	valueOf()
Returns the primitive value of the specified object. 
   */

   //number.toExponential( [fractionDigits] )
    var num1 = 1225.30
    var val = num1.toExponential();
    console.log(val) //output: 1.2253e+

    //number.toFixed( [digits] )
    var num3 = 177.234
    console.log("num3.toFixed() is "+num3.toFixed()) //output: 177
    console.log("num3.toFixed(2) is "+num3.toFixed(2)) // output: 177.23
    console.log("num3.toFixed(6) is "+num3.toFixed(6)) // output: 177.234000

    //number.toLocaleString()
    var num = new Number(177.1234);
    console.log( num.toLocaleString()); //output: 177.1234
    console.log(num); //output: [Number: 177.1234]

    //number.toPrecision( [ precision ] )
    var num = new Number(7.123456);
    console.log(num.toPrecision()); // output: 7.123456
    console.log(num.toPrecision(1)); //output: 7
    console.log(num.toPrecision(2)); // output: 7.1

    //number.toString( [radix] ) //radix − an integer between 2 and 36 specifying the base to use for representing numeric values.
    var num = new Number(10);
    console.log(num.toString()); // in decimal : output: 10
    console.log(num.toString(2)); // in binary : output 1010
    console.log(num.toString(8)); // in octal : output 12

    //number.valueOf()
    var num = new Number(10.10);
    //return a primitive value
    //In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods
    console.log(num.valueOf()); //output: 10
    console.log(num); //output: [Number: 10.1]
