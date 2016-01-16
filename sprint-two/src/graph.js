// vertices: node that other nodes can connect to
// edge: the link line from one vertex to another

// ------------------------
// Instantiate a new graph
var Graph = function() {
  var newGraph = Object.create(Graph.prototype);
  newGraph.vertex = {};
  newGraph.vertex.node = null;
  newGraph.vertex.edge = [];


  return newGraph;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.vertex.node = node;

  /*
  this[node] = { 
    value : node
    edges : [];
  }
  */

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this.vertex.node === node;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // this.vertex.node = null;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // var subEdge = [];
  // subEdge.push(fromNode, toNode);


  // this.vertex.edge.push(subEdge);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


