// constructor is special method to initialize a newly created object once memory has been allocated for it

// The three common ways to create new objects in JavaScript are as follows:
var newObject = {};
// or
var newObject = Object.create(Object.prototype);
// or
var newObject = new Object();

// four ways in which keys and values can then be assigned to an object:

// 1. Dot syntax
// set
newObject.someKey = "Hola a todos";
// get
var value = newObject.someKey;

// 2. Square bracket syntax;
// set
newObject.["otherKey"] = "Hola otra vez";
// get
var value2 = newObject.otherKey;

// 3. Object.defineProperty
// set property
Object.defineProperty (newObject, "thirdKey", {
	value: "For more control of the property's behavior",
	writable: true,
	enumerable: true,
	configurable: true
});

// Otra forma de escribir la definicion de objeto por propiedad seria:
var defineProp = function (obj, key, value) {
	var config = {
		value: value,
		writable: true,
		enumerable: true,
		configurable: true
	};
	Object.defineProperty(obj, key, config);
}
// usando lineas superiores para crear una nueva persona
var person = Object.create(Object.prototype);
defineProp(person, "car", "Delorean");
defineProp(person, "greeting", "Hi Mr.");

console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}


// Javascript doesnt support the concept of classes but it does support special constructor functions that work with objects.
// by using the prefix new, we tell javascript that we would like that the function behave like a constructor and instantiate
// a new object.
// inside the constructor, this reference the new object that has been created.

function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function() {
		return this.model + " has done " + this.miles + " miles.";
	};
}

// usage
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civi.toString());
console.log(mondeo.toString());


// constructor with prototypes
function Car( model, year, miles ) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}
 
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
// Usage:
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );