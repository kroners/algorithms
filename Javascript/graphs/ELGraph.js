class ELGraph {
  constructor() {
    this.index = 0;
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges;
  }

  addVertex(value) {
    const vertex = this.index++;
    this.vertices.push(vertex);
    this.vertices.vertex.weight = value
    this.edges[vertex] = [];
    return this.vertices.indexOf(vertex);
  }
}
