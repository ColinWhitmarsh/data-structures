var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var bbq = Object.create(queueMethods);
  bbq.queueSize = 0;
  bbq.first = 0;

  return bbq;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(value) {
  this[this.queueSize+this.first] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  var result = this[this.first];

  if (this.queueSize > 0) {
    this.queueSize--;
    this.first++;
  }

  return result;
};