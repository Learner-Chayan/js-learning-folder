/**
 * A regular expression can be defined as −
 * var pattern = new RegExp(pattern, attributes); 
OR 
var pattern = /pattern/attributes;
 */


 //The attribute can have any combination of the following values.
 /**
  *
 1 	G
    Global Match
2 	I
    Ignore case
3 	M
    Multiline; treat the beginning and end characters (^ and $) as working over multiple lines
    (i.e., match the beginning or the end of each line (delimited by \n or \r), not only the very beginning or end 
    of the whole input string)
4 	U
    Unicode; treat the pattern as a sequence of unicode code points
5 	Y
    Sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target
    string (and does not attempt to match from any later indexes)
  */


  //Constructing Regular Expressions
  /**
    1 	
    [...]
    Any one character between the brackets
    2 	
    [^...]
    Any one character not between the brackets
    3 	
    [0-9]
    It matches any decimal digit from 0 through 9
    4 	
    [a-z]
    It matches any character from lowercase a through lowercase z
    5 	
    [A-Z]
    It matches any character from uppercase A through uppercase Z
    6 	
    [a-Z]
    It matches any character from lowercase a through uppercase Z
   */



   //Quantifiers
   /**
        1 p+
        It matches any string containing at least one p.
        2 	p*
        It matches any string containing zero or more p's
        3 	p?
        It matches any string containing one or more p's
        4 	p{N}
        It matches any string containing a sequence of N p's
        5 	p{2,3}
        It matches any string containing a sequence of two or three p's
        6 	p{2, }
        It matches any string containing a sequence of at least two p's
        7 	p$
        It matches any string with p at the end of it
        8 	^p
        It matches any string with p at the beginning of it
        9 	[^a-zA-Z]
        It matches any string not containing any of the characters ranging from a through z and A through Z
        10 	p.p
        It matches any string containing p, followed by any character, in turn followed by another p
        11 	^.{2}$
        It matches any string containing exactly two characters
        12 	<b>(.*)</b>
        It matches any string enclosed within <b> and </b>
        13 	p(hp)*
        It matches any string containing a p followed by zero or more instances of the sequence hp
    */



//Literal Characters
/**
 * 1 Alphanumeric
Itself
2 	\0
The NULL character (\u0000)
3 	\t
Tab (\u0009)
4 	\n
Newline (\u000A)
5 	\v
Vertical tab (\u000B)
6 	\f
Form feed (\u000C)
7 	\r
Carriage return (\u000D)
8 	\xnn
The Latin character specified by the hexadecimal number nn; for example, \x0A is the same as \n
9 	\uxxxx
The Unicode character specified by the hexadecimal number xxxx; for example, \u0009 is the same as \t
10 	\cX
The control character ^X; for example, \cJ is equivalent to the newline character \n 
 */



 //Meta-characters
 /**
  * 1 	
.
A single character
2 	
\s
A whitespace character (space, tab, newline)
3 	
\S
Non-whitespace character
4 	
\d
A digit (0-9)
5 	
\D
A non-digit
6 	
\w
A word character (a-z, A-Z, 0-9, _)
7 	
\W
A non-word character
8 	
[\b]
A literal backspace (special case)
9 	
[aeiou]
Matches a single character in the given set
10 	
[^aeiou]
Matches a single character outside the given set
11 	
(foo|bar|baz)
Matches any of the alternatives specified
  */



//RegExp Properties
/**
 * 1 	RegExp.prototype.flags
A string that contains the flags of the RegExp object
2 	RegExp.prototype.global
Whether to test the regular expression against all possible matches in a string, or only against the first
3 	RegExp.prototype.ignoreCase
Whether to ignore case while attempting a match in a string
4 	RegExp.prototype.lastIndex
Whether read/write property of RegExp objects.
5 	RegExp.prototype.multiline
Whether or not to search in strings across multiple lines
6 	RegExp.prototype.source
The text of the pattern
 */

 //RegExp Methods
 /**
  * 1 	RegExp.prototype.exec()

Executes a search for a match in its string parameter
2 	RegExp.prototype.test()

Tests for a match in its string parameter
3 	RegExp.prototype.match()

Performs a match to the given string and returns the match result
4 	RegExp.prototype.replace()

Replaces matches in the given string with a new substring
5 	RegExp.prototype.search()

Searches the match in the given string and returns the index the pattern found in the string
6 	RegExp.prototype.split()

Splits the given string into an array by separating the string into substring
7 	RegExp.prototype.toString()

Returns a string representing the specified object. Overrides theObject.prototype.toString() method
  */



  /**
   * NOTE : please google and learn these regex properties and methods
   * I justed listed these here for time being . 
   * Date : 01-01-2021 - Chayan Roy . 
   */