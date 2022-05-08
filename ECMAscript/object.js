/**
 * 
 * An object is an instance which contains a set of key value pairs.
 *  Unlike primitive data types, objects can represent multiple or complex values and can change over their life time.
 *  The values can be scalar values or functions or even array of other objects.
 */

 function dotSeparator()
 {
    console.log('.............................................................................................');
 }

 //Object Initializers

 var identifier = {
    Key1:10001, Key2: function () { 
       return 2+3
    }, 
    Key3: ["content1","content2"] 
 } 

 //objectName.propertyName 
 console.log(identifier);

 //.................................................
 var person = { 
    firstname:"Tom", 
    lastname:"Hanks", 
    func:function(){return "Hello!!"},    
 }; 
 //access the object values 
 console.log(person.firstname)   
 console.log(person.lastname) 
 console.log(person.func())
 dotSeparator();
 //....................................................................
 //The Object() Constructor
 /**
   var obj_name = new Object(); 
   obj_name.property = value;    
   OR             
   obj_name["key"] = value 
  */

  //example : 
   var myCar = new Object(); 
   myCar.make = "Ford"; //define an object 
   myCar.model = "Mustang"; 
   myCar.year = 1987;  

   console.log(myCar["make"]) //access the object property 
   console.log(myCar["model"]) 
   console.log(myCar["year"])
   dotSeparator();
   //................................................................................................
   // the object’s property key can be a dynamic value 
   var myCar = new Object()  
   var propertyName = "make"; 
   myCar[propertyName] = "Ford"; 
   console.log(myCar.make)
   dotSeparator();

   //...................................................................................................
   //Constructor Function and Function's object
   /*
   function function_name() { 
      this.property_name = value 
   }
   Object_name = new function_name
   Object_name.property_name
   */

  function Car() { 
   this.make = "Ford" 
   this.model = "F123" 
}  
var obj = new Car() 
console.log(obj.make) 
console.log(obj.model)
//A new property can always be added to a previously defined object. For example, consider the following code snippet −
obj.size = "large";
console.log(obj.size);


dotSeparator();
//.........................................................................................
//Object.create() Method
var roles = { 
   type: "Admin",
   displayType : function() {  
      console.log(this.type); 
   } 
}  
var super_role = Object.create(roles); 
super_role.displayType(); // Output:Admin  

// Create new role type called Guest 
var guest_role = Object.create(roles); 
guest_role.type = "Guest"; 
guest_role.displayType(); // Output:Guest
//.......................................................................................................
//The Object.assign() Function
//Object.assign(target, ...sources) 
var det = { name:"Tom", ID:"E1001" }; 
var copy = new Object();
Object.assign(copy, det); 
console.log(copy);  
dotSeparator();
//......................................................................................................
//Example − Merging Objects
var o1 = { a: 10 }; 
var o2 = { b: 20 }; 
var o3 = { c: 30 }; 
var obj = Object.assign(o1, o2, o3); // assigning to o1 
console.log(obj);   //output : { a: 10, b: 20, c: 30 }
console.log(o1);   // //output : { a: 10, b: 20, c: 30 }
console.log(o2);   // //output : { b: 20 }
console.log(o3);   // //output : { c: 30 }


// NOTE : Note − Unlike copying objects, when objects are merged,
// the larger object doesn’t maintain a new copy of the properties. Rather it holds the reference to the properties contained in the original objects.
// The following example explains this concept
var o1 = { a: 10 }; 
var obj = Object.assign(o1); 
obj.a++ 
console.log("Value of 'a' in the Merged object after increment  ") 
console.log(obj.a);  // output: 11
console.log("value of 'a' in the Original Object after increment ") 
console.log(o1.a);  // output: 11 
dotSeparator();
//..............................................................................................................................
//Deleting Properties
var myobj = new Object; 
myobj.a = 5; 
myobj.b = 12; 
delete myobj.a; 
console.log(myobj);
dotSeparator();

//................................................................................................................
//Object De-structuring / Separating obj key
let student = {
   rollno:20,
   name:'Prijin',
   cgpa:7.2
}

//destructuring to same property name
   let {name,cgpa} = student
   console.log(name)
   console.log(cgpa)

//destructuring to different name
console.log('...........');
   let {name:student_name,cgpa:student_cgpa}=student
   console.log(student_cgpa)
   console.log("student_name",student_name)