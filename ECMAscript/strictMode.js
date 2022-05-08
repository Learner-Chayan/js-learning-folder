//"use strict"

/*
  if we use strict mode which is written above then we have to provide var / let while declaring variable 
 otherwise it will give error;
 */

 message = "this is a text";
console.log(message);

function showSkill()
{
    "use strict";

    // it will check only into the function for strict mode . outside function strict mode will not work .
    var skill = "I have no skill";
    console.log(skill);
}

showSkill();



/*
ES6 and Hoisting
................

The JavaScript engine, by default, moves declarations to the top.
 This feature is termed as hoisting. This feature applies to variables and functions. 
 Hoisting allows JavaScript to use a component before it has been declared.
 However, the concept of hoisting does not apply to scripts that are run in the Strict Mode.
 */