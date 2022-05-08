class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short. Length should be more than 4");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John");
  console.log(user.name); // John
  
  user = new User(""); // Name is too short.


 // Another class 
 class Student {
    constructor(idNo)
    {
        /// assigning to to 'id' variable
        this.id = idNo;
    }
    // setter of id variable
    set id(id) {
        // assigning id variable's value to new variable _idNumber 

        if(typeof id !== 'number') 
        {
            console.log('Id should be a number .');
            return ;
        }
        this._idNumber = id;
    }
    // getter of id variable
    get id()
    {
        // returning the new variable _idNumber where we assgin id variable's value using setter
        return this._idNumber;
    }
    
 }

 const std = new Student(45);
 console.log(std.id);
 std.id = 'id no = 33';
 new Student('id = 90');
