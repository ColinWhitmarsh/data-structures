var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
      // tail is a property of list. Set tail value to the value passed in
      // tail will not have a next
      list.tail = Node(value);

      // check if list's head property is set to null
      if ( list.head === null ) {
        // if yes, set head value to value passed in
        list.head = Node(value);
        // now set head's next to tail's value
        list.head.next = list.tail.value;
      }
  };

  list.removeHead = function() {
    // create variable to hold current head value
    var headValue = list.head.value;
    // since this function removes the current head
    // set head value to tail's value
    list.head.value = list.tail.value;

    // return the previous head value
    return headValue;
  };

  list.contains = function(target) {
    // loop the list prop to find the target
    for (var prop in list) {
      // if list property contains the value that is the same as target
      if ( list[prop].value === target) {
        // return true
        return true;
      }
    }
    // else return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

