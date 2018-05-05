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
