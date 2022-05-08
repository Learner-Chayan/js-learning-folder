/**
 * 1 	charAt()

Returns the character at the specified index.
2 	charCodeAt()
Returns a number indicating the Unicode value of the character at the given index.
3 	concat()
Combines the text of two strings and returns a new string.
4 	indexOf()
Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
5 	lastIndexOf()
Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
6 	localeCompare()
Returns a number indicating whether a reference string comes before or after or is the same as the given string in a sorted order.
7 	match()
Used to match a regular expression against a string.
8 	replace()
Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
9 	search()
Executes the search for a match between a regular expression and a specified string.
10 	slice()
Extracts a section of a string and returns a new string.
11 	split()
Splits a String object into an array of strings by separating the string into substrings.
12 	substr()
Returns the characters in a string beginning at the specified location through the specified number of characters.
13 	substring()
Returns the characters in a string between two indexes into the string.
14 	toLocaleLowerCase()
The characters within a string are converted to lower case while respecting the current locale.
15 	toLocaleupperCase()
The characters within a string are converted to uppercase while respecting the current locale.
16 	toLowerCase()
Returns the calling string value converted to lowercase.
17 	toString()
Returns a string representing the specified object.
18 	toUpperCase()
Returns the calling string value converted to uppercase.
19 	valueOf()
Returns the primitive value of the specified object.
 */

 //string.charAt(index);
    var str = new String("This is string");
    console.log("str.charAt(0) is:" + str.charAt(0)); // output: str.charAt(0) is:T
    console.log("str.charAt(1) is:" + str.charAt(1));
    console.log("str.charAt(2) is:" + str.charAt(2));


//string.charCodeAt(index);
    var str = new String("This is string");
    console.log("str.charAt(0) is:" + str.charCodeAt(0)); //output: str.charAt(0) is:84 
    console.log("str.charAt(1) is:" + str.charCodeAt(1));
    console.log("str.charAt(2) is:" + str.charCodeAt(2));

//string.concat(string2, string3[, ..., stringN]);
    var str1 = new String( "This is string one" );
    var str2 = new String( "This is string two" );
    var str3 = str1.concat( str2 );
    console.log("str1 + str2 : "+str3) //output: str1 + str2 : This is string oneThis is string two

//string.indexOf(searchValue[, fromIndex])
    var str1 = new String( "This is string one" );
    var index = str1.indexOf( "string" );
    console.log("indexOf found String :" + index ); //output: indexOf found String :8
    var index = str1.indexOf( "sdfsdf" );
    console.log("indexOf found String :" + index ); //output: indexOf found String : -1

//string.lastIndexOf(searchValue[, fromIndex])
    var str1 = new String( "This is string one and again string" );
    var index = str1.lastIndexOf( "string" );
    console.log("lastIndexOf found String :" + index ); //output: lastIndexOf found String :29
    index = str1.lastIndexOf( "one" );
    console.log("lastIndexOf found String :" + index ); // output: lastIndexOf found String :15
    //if not found then it will return -1 

//string.localeCompare( param )
    var str1 = new String( "This is beautiful string" );
    var index = str1.localeCompare( "This is beautiful string");
    var index2 = str1.localeCompare( "This is beautiful");
    console.log("localeCompare  index :" + index ); //output: 0
    console.log("localeCompare index2 :" + index2 ); // output : 1

    /**
    0 − If the string matches 100%.
    1 − no match, and the parameter value comes before the string object's value in the locale sort order
    A negative value − no match, and the parameter value comes after the string object's value in the local sort order
     */

//string.replace(regexp/substr, newSubStr/function[, flags]);
    var re = /apples/gi; 
    var str = "Apples are round, and apples are juicy."; 
    var newstr = str.replace(re, "oranges"); 
    console.log(newstr)  // output: oranges are round, and oranges are juicy.    

    var re = /(\w+)\s(\w+)/; 
    var str = "zara ali "; 
    var newstr = str.replace(re, "$2, $1"); 
    console.log(newstr); //output: ali, zara
    

//string.search(regexp);
    var re = /apples/gi;
    var str = "Apples are round, and apples are juicy."; 
    if ( str.search(re) == -1 ) { 
    console.log("Does not contain Apples" ); 
    } else { 
    console.log("Contains Apples" ); 
    }  
    console.log(str.search(re)); // output : 0
    //output: Contains Apples

//string.slice( beginslice [, endSlice] );
    var str = "Apples are round, and apples are juicy.";
    var sliced = str.slice(3, -2); 
    console.log(sliced); //output: les are round, and apples are juic    

//string.split([separator][, limit]); 
    var str = "Apples are round, and apples are juicy."; 
    var splitted = str.split(" ", 3); 
    console.log(splitted) //output: [ 'Apples', 'are', 'round,' ]  

//string.substr(start[, length]); 
    var str = "Apples are round, and apples are juicy."; 
    console.log("(1,2): "    + str.substr(1,2)); //output: (1,2): pp 
    console.log("(-2,2): "   + str.substr(-2,2)); //output: (-2,2): y. 
    console.log("(1): "      + str.substr(1));   //output: (1): pples are round, and apples are juicy. 
    console.log("(-20, 2): " + str.substr(-20,2)); //output: (-20, 2): nd 
    console.log("(20, 2): "  + str.substr(20,2)); //output: (20, 2): d  

//string.substring(indexA, [indexB]) 
    var str = "Apples are round, and apples are juicy."; 
    console.log("(1,2): "    + str.substring(1,2)); //output: (1,2): p 
    console.log("(0,10): "   + str.substring(0, 10)); //output:(0,10): Apples are 
    console.log("(5): "      + str.substring(5));   //(5): s are round, and apples are juicy 


//string.toLocaleLowerCase( ) 
    var str = "Apples are round, and Apples are Juicy."; 
    console.log(str.toLocaleLowerCase( ));   //output: apples are round, and apples are juicy. 


//string.toLowerCase( )  
    var str = "Apples are round, and Apples are Juicy."; 
    console.log(str.toLowerCase( )) //output: apples are round, and apples are juicy. 

//string.toString()   
    var str = "Apples are round, and Apples are Juicy."; 
    console.log(str.toString( ));   //Apples are round, and Apples are Juicy.  

//string.toUpperCase()  
    var str = "Apples are round, and Apples are Juicy."; 
    console.log(str.toUpperCase( ));  //output: APPLES ARE ROUND, AND APPLES ARE JUICY.  


//New String Methods
//str.startsWith(searchString[, position])
    var str = 'hello world!!!'; 
    console.log(str.startsWith('hello')); //output:true


//str.endsWith(matchstring[, position])
    var str = 'Hello World !!! '; 
    console.log(str.endsWith('Hello')); //output: false
    console.log(str.endsWith('Hello',5)); //output: true


//str.includes(searchString[, position])
    var str = 'Hello World';  
    console.log(str.includes('hell'))  //output: false   
    console.log(str.includes('Hell')); //output: true
    console.log(str.includes('or'));   //output: true
    console.log(str.includes('or',1))  // output: true


//str.repeat(count)
    var myBook = new String("Perl "); 
    console.log(myBook.repeat(2));  //output: Perl Perl 


// Template Literals
    var name = "Brendan"; 
    console.log(`Hello, ${name}!`); //output : Hello, Brendan!

    var a = 10; 
    var b = 10; 
    console.log(`The sum of ${a} and ${b} is  ${a+b} `); //The sum of 10 and 10 is  20

    function fn() { return "Hello World"; } 
    console.log(`Message: ${fn()} !!`); // output : Message: Hello World !!

//String.raw()
    var text =`Hello \n World` 
    console.log(text)  

    var raw_text = String.raw`Hello \n World ` 
    console.log(raw_text)
    /**
     * output:  Hello 
                World 
                Hello \n World
     */

//String.fromCodePoint() // returns a string created by using the specified sequence of unicode code points.
console.log(String.fromCodePoint(42))  //output: * 
console.log(String.fromCodePoint(65, 90)) //output: AZ