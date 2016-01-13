var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueSize++;
    storage[queueSize] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[queueSize];
    if (queueSize > 0) {
      delete storage[queueSize];
      queueSize--;
    }
    return result;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
