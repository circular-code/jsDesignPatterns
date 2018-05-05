// --- Module Pattern (aka Object Literal) ---

var module = {
 
    variableKey: variableValue,
 
    functionKey: function () {
      // ...
    }
};

// --- Revealing Module Pattern (aka Module Pattern) ---

var revealingModule = (function () {
 
  var counter = 0;
 
  return {
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})();

// revealing module can also be written like this

var revealingModule = (function () {
 
  var _counter = 0;
 
  var public = {
    incrementCounter: function () {
      return _counter++;
    },
    resetCounter: function () {
      console.log( "counter value prior to reset: " + _counter );
      _counter = 0;
    }
  }
   
  return public; 
})();
 
// --- Singleton Pattern (variation of module pattern) ---

var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// --- ES5 Class ---

// Constructor
function MyClass() {
  this.a = 42;
}

// Method
MyClass.prototype.method = function method() {};

// Instantiate
var instance = new MyClass();

// --- ES5 Inheritance ---

// Parent class constructor
function Parent() {
  this.a = 42;
}

// Parent class method
Parent.prototype.method = function method() {};

// Child class constructor
function Child() {
  Parent.call(this);
  this.b = 3.14159
}

// Inherit from the parent class
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// Child class method
Child.prototype.method = function method() {
  Parent.prototype.method.call(this);
};

// Instantiate
var instance = new Child();

// --- ES6 Class --

// Class
class MyClass {

  // Constructor
  constructor() {
    this.a = 42;
  }

  // Method
  method() {}
}

// Instantiate
let instance = new MyClass();

// --- ES6 Inheritance ---

// Parent class
class Parent {

  // Parent class constructor
  constructor() {
    this.a = 42;
  }

  // Parent class method
  method() {}

}

// Child class inherits from Parent
class Child extends Parent {

  // Child class constructor
  constructor() {
    super();
    this.b = 3.14159;
  }

  // Child class method
  method() {
    super.method();
  }
}

// Instantiate
let instance = new Child();
