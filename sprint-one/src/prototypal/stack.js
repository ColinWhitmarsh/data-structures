var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var babyStack = Object.create(stackMethods);
  babyStack.stackSize = 0;

  return babyStack;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
  }

  return this[this.stackSize];
};

stackMethods.size = function() {
  return this.stackSize;
};
