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
    

    
    // for (var key in storage) {
    //   var result = storage[key];
    //   delete storage[key];
    //   break;
    // }
    
    var result = storage[1];
    for ( var key = 1; key < queueSize; key++ ){
      storage[key] = storage[key+1];
    }

    if (queueSize > 0) {
      queueSize--;
    }


    return result;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};


/*{
  1: a;
  2: b;
}
*/