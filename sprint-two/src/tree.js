var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = {
    'value': value,
    'children': []
  };

  this.children.push(childTree);

  _.extend(childTree, treeMethods);
};

treeMethods.contains = function(target) {
// create function in contains that will check the child. Then we can use recursion to check the child's child


  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    return this.children[i].contains(target);
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
