var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.queueSize = 0;
  newQueue.first = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.queueSize + this.first] = value;

  this.queueSize++;
};

queueMethods.dequeue = function() {
  var result = this[this.first];
  if (this.queueSize > 0) {
    this.first++;
    this.queueSize--;
  }
  return result;
};

queueMethods.size = function() {
  return this.queueSize;
};

