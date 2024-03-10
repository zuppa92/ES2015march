// Object enhancement exercise

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

// Same keys and values old above and ES2015 below

  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  };

  var favoriteNumber = 42;

  var instructor = {
    firstName: "Colt"
  }
  
  instructor[favoriteNumber] = "That is my favorite!"

  // Computed Property Names old above and ES2015 below

  let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + "says bye!";
    }
  };

  // Object Methods old above ES2015 below

  const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  };

// Write a function which generates an animal object. The function should accepts 3 arguments:
// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

const d = createAnimal("dog", "bark", "Woof")
// {species: "dog", bark: ƒ}
d.bark()  //"Woof"

const s = createAnimal("sheep", "bleet", "Baaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"Baaaa"

// ES2015 
function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
};
// Object enhancement exercise