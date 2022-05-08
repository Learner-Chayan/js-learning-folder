//Array Object
    var arr_names = new Array(4)  
    for(var i = 0;i<arr_names.length;i++) { 
    arr_names[i] = i * 2 
    console.log(arr_names[i]) 
    } //output : 0 2 4 6


//Array Methods
/**
 * 1 	concat()
Returns a new array comprised of this array joined with other array(s) and/or value(s)
2 	every()
Returns true if every element in this array satisfies the provided testing function.
3 	filter()
Creates a new array with all of the elements of this array for which the provided filtering function returns true.
4 	forEach()
Calls a function for each element in the array.
5 	indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
6 	join()
Joins all elements of an array into a string.
7 	lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
8 	map()
Creates a new array with the results of calling a provided function on every element in this array.
9 	pop()
Removes the last element from an array and returns that element.
10 	push()
Adds one or more elements to the end of an array and returns the new length of the array.
11 	reduce()
Applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
12 	reduceRight()
Applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
13 	reverse()
Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
14 	shift()
Removes the first element from an array and returns that element slice.
15 	slice()
Extracts a section of an array and returns a new array.
16 	some()
Returns true if at least one element in this array satisfies the provided testing function.
17 	
toSource()
Represents the source code of an object.
18 	sort()
Sorts the elements of an array.
19 	splice()
Adds and/or removes elements from an array.
20 	toString()
Returns a string representing the array and its elements.
21 	unshift()
Adds one or more elements to the front of an array and returns the new length of the array.
 */



//array.concat(value1, value2, ..., valueN);
    var alpha = ["a", "b", "c"]; 
    var numeric = [1, 2, 3];
    var alphaNumeric = alpha.concat(numeric); 
    console.log("alphaNumeric : " + alphaNumeric );  //output: alphaNumeric : a,b,c,1,2,3


//array.every(callback[, thisObject]); 
    function isBigEnough(element, index, array) { 
        return (element >= 10); 
    } 
    var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
    console.log("Test Value : " + passed );  //output: Test Value : false

    var passed2 = [10,12,13,14,15].every(isBigEnough);
    console.log(passed2); //output : true


//array.filter(callback[, thisObject]); 
    function isBigEnough(element, index, array) { 
        return (element >= 10); 
    } 
    var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
    console.log("Test Value : " + passed );  //output : Test Value :12,130,44 

    var p=  [12, 5, 8, 130, 44].filter((element,index,array) => {
        return (element>=10);
    }) 
    console.log(p); //output : [ 12, 130, 44 ]


//array.forEach(callback[, thisObject]);  
    var nums = new Array(12,13,14,15)  
    console.log("Printing original array......")  
    nums.forEach(function(val,index) { 
    console.log(val) 
    })  

    nums.reverse()  //reverses the array element 
    console.log("Printing Reversed array....")  
    nums.forEach(function(val,index){ 
    console.log(val) 
    })  


//array.indexOf(searchElement[, fromIndex]);   
    var index = [12, 5, 8, 130, 44].indexOf(8); 
    var index2 = [12, 5, 8, 130, 44].indexOf(110); 
    console.log("index is : " + index ) //output: 2 
    console.log("index is : " + index2 ) //output: -1


//array.join(separator);   
    var arr = new Array("First","Second","Third"); 
    var str = arr.join();
    console.log("str : " + str );  //output : str : First,Second,Third
    var str = arr.join(", "); 
    console.log("str : " + str );   //output: str : First, Second, Third
    var str = arr.join(" + "); 
    console.log("str : " + str );  //output : str : First + Second + Third

//array.lastIndexOf(searchElement[, fromIndex]);  
    var index = [12, 5, 8, 130, 44].lastIndexOf(8); 
    var index2 = [12, 5, 8, 130, 44].lastIndexOf(50); 
    console.log("index is : " + index ); //output: 2
    console.log("index is : " + index2 ); //output: -1


//array.map(callback[, thisObject]);   
    var numbers = [1, 4, 9]; 
    var roots = numbers.map(Math.sqrt); 
    console.log("roots is : " + roots );   //output : roots is : 1,2,3
    var roots = numbers.map(x=>x+2); 
    console.log("roots is : " + roots ); //output : roots is : 3,6,11


//array.pop();   
    var numbers = [1, 4, 9]; 
    var element = numbers.pop(); 
    console.log("element is : " + element );  //output : 9

    var element = numbers.pop(); 
    console.log("element is : " + element );   // output 4
    console.log(numbers); //output : [1]


//array.push(element1, ..., elementN);    
    var numbers = new Array(1, 4, 9);
    var length = numbers.push(10); 
    console.log("new numbers is : " + numbers );  //output : new numbers is : 1,4,9,10 
    length = numbers.push(20); 
    console.log("new numbers is : " + numbers );  //output : new numbers is : 1,4,9,10 ,20


//array.reduce(callback[, initialValue]);   
    var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
    console.log("total is : " + total );   // output : total is : 6


//array.reduceRight(callback[, initialValue]);    
    var total = [0, 1, 2, 3].reduceRight(function(a, b){ return a + b; }); 
    console.log("total is : " + total );   //output : total is : 6


//array.reverse();    
    var arr = [0, 1, 2, 3].reverse(); 
    console.log("Reversed array is : " + arr );   //output : Reversed array is : 3,2,1,0


//array.shift();  
var array =   [10, 1, 2, 3];
var shifted = array.shift(); 
console.log("Shifted value is : " + shifted ); //output : Shifted value is : 10
console.log('now the array is '+ array);  //output : now the array is 1,2,3


//array.slice( begin [,end] );  
    var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
    console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) ); //output : arr.slice( 1, 2) : mango
    console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) ); //output : arr.slice( 1, 3) : mango,banana


//array.some(callback[, thisObject]);    
    function isBigEnough(element, index, array) { 
        return (element >= 10); 
    } 
    var retval = [2, 5, 8, 1, 4].some(isBigEnough); 
    console.log("Returned value is : " + retval );  //output : Returned value is : false 
    
    var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
    console.log("Returned value is : " + retval );  //output : Returned value is : true


//array.sort( compareFunction );    
    var arr = new Array("orange", "mango", "banana", "sugar"); 
    var sorted = arr.sort(); 
    console.log("Returned string is : " + sorted ); //output : Returned string is : banana,mango,orange,sugar
    console.log(sorted.reverse()); //output : [ 'sugar', 'orange', 'mango', 'banana' ]

    var numArr = [1,5,8,7,9,6,4];
    var numAscending = numArr.sort();
    console.log(numAscending); //output : [1, 4, 5, 6,7, 8, 9]
    var numDesccending = numArr.sort(function(a, b){return  b-a });
    console.log(numDesccending); //output : [9, 8, 7, 6,5, 4, 1 ]


//array.splice(index, howMany, [element1][, ..., elementN]);     
    var arr = ["orange", "mango", "banana", "sugar", "tea"];  
    var removed = arr.splice(2, 0, "water");  
    console.log("After adding 1: " + arr );  //output : After adding 1: orange,mango,water,banana,sugar,tea
    console.log("removed is: " + removed);  // output : removed is:

    removed = arr.splice(3, 1);  
    console.log("After adding 1: " + arr );  //output : After adding 1: orange,mango,water,sugar,tea
    console.log("removed is: " + removed);  //removed is: banana


//array.toString();     
    var arr = new Array("orange", "mango", "banana", "sugar");         
    var str = arr.toString(); 
    console.log( str );  //output : orange,mango,banana,sugar


//array.unshift( element1, ..., elementN );      
    var arr = new Array("orange", "mango", "banana", "sugar"); 
    var length = arr.unshift("water"); 
    console.log("Returned array is : " + arr ); //output : Returned array is : water,orange,mango,banana,sugar
    console.log("Length of the array is : " + length );  //output : Length of the array is : 5
    


//......................................................................................................
//ES6 − some new Array Methods

//Array.prototype.find
    var numbers = [1, 2, 3,5,6,7]; 
    var oddNumber = numbers.find((x) => x % 2 == 1); 
    console.log(oddNumber); //output:  1
    /**
     * note : find lets you iterate through an array and get the first element back that causes the given callback function to return true.
     *  Once an element has been found, the function immediately returns.
     *  It’s an efficient way to get at just the first item that matches a given condition.
     */

//Array.prototype.findIndex
    var numbers = [1, 2, 3]; 
    var oddNumber = numbers.findIndex((x) => x % 2 == 1); 
    console.log(oddNumber); // 0 
    //findIndex behaves similar to find, but instead of returning the element that matched, it returns the index of that element.


//Array.prototype.entries
    var numbers = [1, 2, 3]; 
    var val = numbers.entries(); 
    console.log(val.next().value);  //output : [ 0, 1 ] 
    console.log(val.next().value);  //output : [ 1, 2 ]
    console.log(val.next().value);  //output : [ 2, 3 ]

    var v2 = [1, 2, 3].entries(); 
    console.log([...v2]); //output : [[0,1],[1,2],[2,3]]
    console.log(v2); //output : Object [Array Iterator] {}


//Array.from
    for (let i of Array.from('hello')) { 
        console.log(i) 
        /**
         * output: 
         * h
         * e
         * l
         * l
         * o
         */
    }

