var a = 8; 
var b = 9; 

console.log("a = "+a+" b = "+b);
console.log("Bitwise & (and) result is ");
console.log(a & b);
console.log("Bitwise | (or) result is ");
console.log(a | b);
/*
explanation : 
9 = 1001
8 = 1000

bitwise and = 
1 0 0 1
1 0 0 0
..........
1 0 0 0 = 8

compare each bit with it position bit , if both 1 then the position's bit returns 1 otherwise 0 
*/

/*
explanation : 
9 = 1001
8 = 1000 

1 0 0 1 
1 0 0 0 
........
1 0 0 1 = 9 

compare each bit with it position bit of others then if any bit is 1 then return 1 . 
*/

result = (a ^ b);
console.log("(a ^ b) => ", result);
/*//Explanation : bitwise xor
9 = 1 0 0 1
8 = 1 0 0 0
............
    0 0 0 1 = 1 (if bits are same then return 0 otherwise 1)
Explanation 2 :
...............
1010 = 10 , 1001 = 9 
1 0 1 0 
1 0 0 1 
.......
0 0 1 1 = 3  is result .
*/

result = (~b); //Inverts the bits of its operand
console.log("(~b) => ", result);

result = (a << b);
console.log("(a << b) => ", result);

/**
 * bitwise explanation (left shift)
 * ......................
 * 8 = 1000 
 * as (<32) so => 00000000000000000000000000001000
 * here b is 9  so it will shift 9 bit and as it is left shift so shift will happen in left
 * Result = 00000000000000000001000000000000 = 4096 
 * 
 * 
 * 
 */

result = (a >> b);
console.log("(a >> b) => ", result);

/**
 * bitwise explanation (right shift)
 * ......................
 * 8 = 1000 
 * as (<32) so => 00000000000000000000000000001000
 * here b is 9  so it will shift 9 bit and as it is left shift so shift will happen in left
 * Result = 00000000000000000000000000000000 = 0
 * 
 * if it b was 2 then result was = 00000000000000000000000000000010
 * 
 */
