function Student(rollno,firstName,lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('Roll :'+this.rollno+" Firstname: "+this.firstName+" lastName :"+this.lastName);
    this.fullNameUsingAnonymous = function(){
       setTimeout(function(){
          //creates a new instance of this ,hides outer scope of this
          console.log(this.firstName+ " "+this.lastName)
          //result: undifined undifined
       },2000)
    }
    this.fullNameUsingArrow = function(){
       setTimeout(()=>{
          //uses this instance of outer scope
          console.log(this.firstName+ " "+this.lastName)
          //result : Chayan Roy
       },3000)
    }
 }
 const s1 = new Student(101,'Chayan','Roy')
 s1.fullNameUsingAnonymous();
 s1.fullNameUsingArrow();