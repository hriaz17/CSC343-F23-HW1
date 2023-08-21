// index.js

const fs = require('fs');

class graphClass {
  constructor() {
    this.graph = {
      nodes: [],
      edges: []
    };
    this.degreeHistogram = {};
  }

  readGraphFromJSON(filePath) {
    // write your code here
  }

  writeGraphToJSON(filePath) {
    // write code here
  }

  calculateDegreeHistogram() {
    // write your code here
  }

  displayHistogram() {
    // write your code here
  }
}

// Example usage
// Example usage
const graphClass = new graphClass();
graphClass.readGraphFromJSON('graph_data.json');
graphClass.calculateDegreeHistogram();
graphClass.displayHistogram();

graphClass.writeGraphToJSON('output_graph.json');
