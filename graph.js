// create a matrix and set all slot to zero
function createAdjMatrix(n) {
	let adj = [];
	for (let i = 0; i < n + 1; i++) {
		let row = [];
		for (let j = 0; j < n + 1; j++) {
			row.push(0);
		}
		adj.push(row);
	}
	return adj;
}

function printAdjMatrix(arr) {
	for (let i = 1; i < arr.length; i++) {
		let output = "";
		for (let j = 1; j < arr.length; j++) {
			output += arr[i][j] + " ";
		}
		console.log(output);
	}
}

function dfs(adj, startNode) {
	let output = "";
	let st = [];
	let visited = [];
	for (let i = 0; i < adj.length; i++) {
		visited.push(false);
	}

	st.push(startNode);
	while (st.length !== 0) {
		let u = st[st.length - 1];
		st.pop();

		if (visited[u]) continue;

		visited[u] = true;
		output += u + " ";

		for (let v = adj.length - 1; v >= 1; v--) {
			if (adj[u][v] === 1)
				st.push(v);
		}
	}

	console.log("---> " + output);
}

function bfs(adj) {

}

function matrixWay() {
	let v = 5;
	let e = 5;

	let adj = createAdjMatrix(v); // index base 1
	let input = [
		[1, 2],
		[1, 4],
		[2, 4],
		[3, 4],
		[3, 5],
	]


	for (let i = 1; i <= e; i++) {
		let [u, v] = input[i - 1];
		adj[u][v] = 1;
		adj[v][u] = 1;
	}

	printAdjMatrix(adj);

	dfs(adj, 3);
}

function arrayOfList() {
	let v = 5;
	let e = 6;

	let input = [
		[1, 2],
		[1, 3],
		[1, 4],
		[2, 4],
		[3, 4],
		[4, 5],
	]

	let adj = [];

	for (let i = 1; i <= v + 1; i++) {
		adj.push([]);
	}

	// store undirected graph.
	for (let i = 1; i <= e; i++) {
		let [u, v] = input[i - 1];

		// store without weight
		adj[u].push(v);
		adj[v].push(u);

		// store with weight
	}

	for (let i = 1; i <= v; i++)
		console.log(i, " --> ", adj[i]);

}

matrixWay();
arrayOfList();
