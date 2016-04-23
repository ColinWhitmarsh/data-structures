var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;

  return bst;
};

BinarySearchTree.prototype.insert = function(value) {
  // create an object literal and assign to variable node
  var node = {};

  // add key property and assign to value
  node.value = value;
  // add left property and leave undefined
  node.left = undefined;
  // add right property and leave undefined
  node.right = undefined;

  var checkNode = function(newNode, currentNode) {
    // check if value is smaller than this.value (bst.value)
    if (newNode.value < currentNode.value) {
      // if smaller, than add newNode to the left property of currentNode (bst)
      if (currentNode.left === undefined) {
        currentNode.left = newNode;
        return;
      }
      checkNode(newNode, currentNode.left);
    }
    if (newNode.value > currentNode.value) {
      if (currentNode.right === undefined) {
        currentNode.right = newNode;
        return;
      }
      checkNode(newNode, currentNode.right);
    }
  };

  checkNode(node, this);

};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;

    var checkValue = function(value, currentNode) {
      // check if value is smaller than this.value (bst.value)
      console.log('hello');
      if (value === currentNode.value) {
        result = true;
        return result;
      }

      if (value !== currentNode.value) {
        if (value <= currentNode.left.value) {
          checkValue(value, currentNode.left.value);
        }
        if (value >= currentNode.right.value) {

          console.log(currentNode.right.value);
          checkValue(value, currentNode.right.value);

        }      
      }
    };

  checkValue(value, this);

  return result;


};

BinarySearchTree.prototype.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
