  //obj1 What does the following code return/print?

  let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
  let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // answer 8
console.log(yearNeptuneDiscovered); // answer 1846

//obj2 What does the following code return/print?
let planetFacts = {
    numPlanetss: 'Eight',
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanetss, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // answer {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

  //obj3 What does the following code return/print?
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  // Your name is Alejandro and you like purple
  
  getUserData({firstName: "Melissa"})
  // Your name is Melissa and you like green
  
  getUserData({})
  // Your name is undefined and you like green

//arr1 What does the following return/print?
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//arr2 What does the folling return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings);
  // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//arr3 What does the folling return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // answer [10,30,20]

//ES5 to ES2015

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

// Write an ES2015 Version 

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

// ES5 Array Swap

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 one-line array swap with destructure
[arr[0], arr[1]] = [arr[1], arr[0]] //ES2015 version

// Race result function raceResults()
// Write a one line function using an arrow function, destructuring, and Enhanced object assignment

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})