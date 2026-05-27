from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict, deque

app = FastAPI()

# Enable frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {"Ping": "Pong"}

@app.post('/pipelines/parse')
async def parse_pipeline(data: dict):

    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build graph
    graph = defaultdict(list)
    indegree = defaultdict(int)

    # Initialize nodes
    for node in nodes:
        indegree[node["id"]] = 0

    # Add edges
    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    # Kahn's Algorithm for DAG detection
    queue = deque([
        node_id
        for node_id in indegree
        if indegree[node_id] == 0
    ])

    visited = 0

    while queue:
        current = queue.popleft()
        visited += 1

        for neighbor in graph[current]:
            indegree[neighbor] -= 1

            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }