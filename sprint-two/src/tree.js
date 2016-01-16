var Tree = function(value) {
  // newTree will hold treeMethods & array of children
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // I'm fixed !

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // childTree object will be held at tree's children's array
  var childTree = {
    'value': value,
    'children': []
  };

  this.children.push(childTree);

  _.extend(childTree, treeMethods);
};

treeMethods.contains = function(target, trueOrFalse) {
  // trueOrFalse will start at false
  // we will change it to true when the target is matched in the tree
  trueOrFalse = trueOrFalse || false;

  // loop through the children's array
  for (var i = 0; i < this.children.length; i++) {
    // create child variable to hold each individual child in children's array
    var child = this.children[i];

    // if that child's value is the same as the input target
    if (child.value === target) {
      // reset trueOrFalse value to true 
      trueOrFalse = true;
    }
    // if the child value does not have the same target value
    else if (child.value !== target) {
      // set trueOrFalse to the return boolean result of contains on the child
      trueOrFalse = child.contains(target, trueOrFalse);
    }
  }

  return trueOrFalse;
};


/*
 * Complexity: What is the time complexity of the above functions?
addChild is constant
contains is linear
 */