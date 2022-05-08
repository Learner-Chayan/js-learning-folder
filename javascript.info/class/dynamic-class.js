function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        console.log(phrase);
      }

      anthorFunc()
      {
          console.log(' hI i am anouther function from dynamic class');
      }
    };
  }
  
  // Create a new class
  let usr = makeClass("Hello");
  console.log('...................Dynamic class.........................');
  new usr().sayHi(); // Hello
  new usr().anthorFunc(); // Hello