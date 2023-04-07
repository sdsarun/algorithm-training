class Graph {
	constructor(numVertices) {
		this.numVertices = numVertices;
		this.matrix = [];
		for (let i = 0; i < numVertices; i++) {
			this.matrix[i] = [];
			for (let j = 0; j < numVertices; j++) {
				this.matrix[i][j] = 0;
			}
		}
	}

	addEdge(source, destination) {
		this.matrix[source][destination] = 1;
		this.matrix[destination][source] = 1; // for undirected graph
	}

	dfs(startVertex) {
		const visited = new Array(this.numVertices).fill(false);
		this._dfsHelper(startVertex, visited);
	}

	_dfsHelper(vertex, visited) {
		visited[vertex] = true;
		console.log(vertex);

		for (let i = 0; i < this.numVertices; i++) {
			if (this.matrix[vertex][i] === 1 && !visited[i]) {
				this._dfsHelper(i, visited);
			}
		}
	}

	bfs(startVertex) {
		const visited = new Array(this.numVertices).fill(false);
		const queue = [];
		visited[startVertex] = true;
		queue.push(startVertex);

		while (queue.length > 0) {
			const vertex = queue.shift();
			console.log(vertex);

			for (let i = 0; i < this.numVertices; i++) {
				if (this.matrix[vertex][i] === 1 && !visited[i]) {
					visited[i] = true;
					queue.push(i);
				}
			}
		}
	}
}

// example usage:
const graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 5);

console.log('DFS:');
graph.dfs(0);

console.log('BFS:');
graph.bfs(0);

