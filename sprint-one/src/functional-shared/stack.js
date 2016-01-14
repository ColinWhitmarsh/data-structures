var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.stackSize = 0;

  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.stackSize;
};

// create a push method for stackMethods which takes in one param
stackMethods.push = function(value) {
  // it will increment newStack.stackSize by one for each param added}
  this[this.stackSize] = value;
  this.stackSize++;
  //for ( var i = 1; i < this.stackSize; i++) {
  //}

};

stackMethods.pop = function() {
  // it will increment newStack.stackSize by one for each param added}
  if ( this.stackSize > 0 ) {
    this.stackSize--;
  }

  // returns the last value at the greatest key in stackSize
    //get the stackSize
    //var poppedKey = this.stackSize;
    return this[this.stackSize];
};



