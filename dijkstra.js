const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3 },
    D: { B: 10, C: 3 }
};

function dijkstra(graph, start) {

    const distances = {};
    const visited = {};

    // Initialisation des distances
    for (let node in graph) {
        distances[node] = Infinity;
    }

    distances[start] = 0;

    while (true) {

        let current = null;
        let shortestDistance = Infinity;

        // Trouver le sommet non visité avec la plus petite distance
        for (let node in distances) {
            if (!visited[node] && distances[node] < shortestDistance) {
                shortestDistance = distances[node];
                current = node;
            }
        }

        // S'il n'y a plus de sommet à visiter
        if (current === null) {
            break;
        }

        visited[current] = true;

        // Mettre à jour les distances des voisins
        for (let neighbor in graph[current]) {

            let distance = distances[current] + graph[current][neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
    }

    return distances;
}

console.log(dijkstra(graph, "A"));