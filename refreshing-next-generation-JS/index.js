// declaring variables with let and const 

var name = "Milan"

// It's the same as

let name = "Milan"

// let is variable, just like var, but the difference between them is that var is function scoped and let is block scoped.
// If you want to change it later

name = "Petra" // name has been changed


const name = "Milan"

// if we want to change it later on

name = "Petra" // we get error because we are trying to assign new value to constant, and it can not be done



// exporting only one value from js file

const person = {
  name: "Milan"
}

export default person

// than importing it in another js file

import person from './person.js'

// or

import prs from './person.js'

// we choose a name for our value - That's why it's called Default export


// exporting multiple values from js file

export const clean = () => { ... }

export const baseData = 10;

// importing that values in another js file

import {clean} from './jsfile'

import {baseData} from './jsfile'

// this is called Named export, but we can also use alias like this

import {smth as Smith} from './jsfile'

// or import everything as js object

import * as someObjectName from './jsfile'


// classes in JS that can inherit from another classes using keyword extends, and then, if we use constructor in our new Class (but we don't have to), than we must use 'super' method inside of constructor to create all things that parent Class has

class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Milan';
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender(); // this works because of inheritance

// in React we use Class keyword to create Components
// classes are just blueprints for JS objects

// in ES6 you need to call constructor and than use 'this' keyword to set property

constructor() {
  this.myProperty = 'value'
}

// in ES7 you can assign property directly inside your class with

myProperty = 'value'

// we want't be calling constructor, but behind the scenes it still works the same as before

// this is the same when we are creating methods

myMethod() {...}

// instead we'll be using arrow functions so that we don't have any problems with 'this' keyword

myMehtod = () => {...}


// spread and rest operators (actually it's only one operator ... , but how we'll call it depends on where we use it)

// spread operator is used to spread array elements or object properties

const newArray = [...oldArray, 1, 2]

const newObject = {...oldObject, newProp: 5}

// array example:

const arr = [1, 2, 3];

const newArr = [...arr, 4];

console.log(newArr); // it outputs this [1, 2, 3, 4]

// object example

const person = {
  name: "Milan"
}

const newPerson = {
  ...person,
  age: 38
}

console.log(newPerson); // it will output this

[object Object] {
  age: 38,
  name: "Milan"
}

// rest operator is used to merge a list of function arguments into an array so that we can than use array methods

function sortArgs(...args) {
  return args.sort();
}

// function example

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)); // returns [1]


// destructuring allows us to extract array elements or object properties and store them in variables

[a, b] = ["Hello", "Milan"]

console.log(a) // returns Hello
console.log(b) // returns Milan

{name} = {name: "Milan", age: 38}

console.log(name) // returns Milan
console.log(age) // returns undefined


const numbers = [1, 2, 3];

[num1, num2] = numbers;

console.log(num1, num2);


// reference and primitive types

const number = 1;
const num2 = number; // creates a copy of number (this applies to all primitive types)

const person = {
  name: "Milan"
}

const secondPerson = person;

console.log(secondPerson); // this is reference type (JS engine just copies the pointer, doesn't make a new copy)

// if we want to make a real copy, we can use spread operater

const secondPerson = {
  ...person
}
