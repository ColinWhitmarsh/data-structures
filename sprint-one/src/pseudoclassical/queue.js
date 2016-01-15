var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.first = 0;

};

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.dequeue = function() {
  var result = this[this.first];

  if ( this.queueSize > 0 ) {
    this.first++;
    this.queueSize--;
  }

  return result;
};

Queue.prototype.enqueue = function(value) {
    this[this.first+this.queueSize] = value;
    this.queueSize++;
};

var NewQueue = new Queue();
