class DisjointSet {
  constructor(vertices) {
    this.parent = {};

    for (let vertex of vertices) {
      this.parent[vertex] = vertex;
    }
  }

  find(node) {
    if (this.parent[node] !== node) {
      this.parent[node] = this.find(this.parent[node]);
    }
    return this.parent[node];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootY] = rootX;
    }
  }
}

function kruskal(vertices, edges) {
  edges.sort((a, b) => a.weight - b.weight);

  const ds = new DisjointSet(vertices);
  const mst = [];
  let totalCost = 0;

  for (let edge of edges) {
    const { source, destination, weight } = edge;

    if (ds.find(source) !== ds.find(destination)) {
      mst.push(edge);
      totalCost += weight;
      ds.union(source, destination);
    }
  }

  return { mst, totalCost };
}

const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  { source: "A", destination: "B", weight: 2 },
  { source: "A", destination: "C", weight: 3 },
  { source: "B", destination: "C", weight: 1 },
  { source: "B", destination: "D", weight: 4 },
  { source: "C", destination: "D", weight: 5 },
  { source: "C", destination: "E", weight: 6 },
  { source: "D", destination: "E", weight: 7 }
];

const result = kruskal(vertices, edges);

console.log("Selected connections:");

result.mst.forEach(edge => {
  console.log(
    `${edge.source} - ${edge.destination} : ${edge.weight}`
  );
});

console.log("Total cost:", result.totalCost);

const vertices = [];
const edges = [];

vertices.push("A");
vertices.push("B");
vertices.push("C");

edges.push({
  source: "A",
  destination: "B",
  weight: 5
});

edges.push({
  source: "B",
  destination: "C",
  weight: 2
});

edges.push({
  source: "A",
  destination: "C",
  weight: 7
});

const result = kruskal(vertices, edges);

console.log(result);