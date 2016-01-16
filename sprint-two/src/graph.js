// vertices: node that other nodes can connect to
// edge: the link line from one vertex to another

// ------------------------
// Instantiate a new graph
var Graph = function() {
  // create an instance of Graph that will receive the same methods as Graph
  var newGraph = Object.create(Graph.prototype);

  return newGraph;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add a node to the newGraph object
  this[node] = { 
    // set the value to equal node
    value : node,
    // set edges to an empty array
    edges : []
  };

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check if one of newGraph's node values equals node
  return this[node].value === node;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // delete the node value from newGraph object
  delete this[node].value;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // iterate through fromNode's edges, incrementing by one
  for (var edge = 0; edge < this[fromNode].edges.length; edge++) {
    // if fromNode's edge contains toNode
    if (this[fromNode].edges[edge] === toNode) {
      // then return true
      return true;
    }
  }
  // continue looping through the edges array & return false if toNode is not found
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add toNode to fromNodes edges array
  this[fromNode].edges.push(toNode);
  // & vice versa
  this[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // since we're assuming that each node has one edge,
  // remove that edge from fromNode
  this[fromNode].edges.pop();
  // remove that edge from toNode
  this[toNode].edges.pop();
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop through newGraph
  for (var property in this) {
    // if newGraph's property is an Object
    if (typeof this[property] === 'object') {
      // invoke the cb on that property
      cb(property);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode is constant
contains is constant
removeNode is constant
hasEdge is linear
addEdge is constant
removeEdge is constant
forEachNoce is linear
 */


