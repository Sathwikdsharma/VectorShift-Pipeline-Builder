# VectorShift Technical Assessment

A visual pipeline builder inspired by workflow orchestration tools like Langflow and n8n.

This project allows users to:
- Create visual workflows using drag-and-drop nodes
- Connect nodes dynamically
- Generate dynamic handles from text variables
- Analyze pipelines using backend DAG detection

---

# Tech Stack

## Frontend
- React
- ReactFlow
- Zustand

## Backend
- FastAPI
- Python

---

# Features Implemented

## Part 1 — Node Abstraction

Created a reusable `BaseNode` abstraction to reduce duplicated code across all nodes.

Benefits:
- Reusable architecture
- Easier node creation
- Centralized styling
- Better maintainability

### Additional Nodes Added
- API Node
- Email Node
- Math Node
- Filter Node
- Delay Node

---

## Part 2 — UI Improvements

Implemented a modern workflow-builder UI inspired by Langflow.

Enhancements:
- Dark themed canvas
- Subtle dotted background
- Improved node styling
- Better handles and edges
- Enhanced workflow editor appearance

---

## Part 3 — Dynamic Text Node Logic

Enhanced the Text Node with dynamic functionality.

### Features
- Auto-resizing textarea
- Dynamic node resizing
- Variable parsing using regex
- Dynamic handle generation

### Example

Input:
```txt
Hello {{name}} from {{company}}
```

Automatically generates:
- `name` input handle
- `company` input handle

---

## Part 4 — Backend Integration & DAG Detection

Connected frontend pipelines to a FastAPI backend.

### Backend Responsibilities
- Parse nodes and edges
- Count nodes
- Count edges
- Detect cycles
- Validate Directed Acyclic Graphs (DAGs)

### DAG Detection
Implemented using:
- Graph adjacency list
- Kahn’s Algorithm (Topological Sorting)

---

# Project Structure

```txt
frontend/
 ├── src/
 │   ├── nodes/
 │   │   ├── BaseNode.js
 │   │   ├── inputNode.js
 │   │   ├── outputNode.js
 │   │   ├── textNode.js
 │   │   ├── apiNode.js
 │   │   ├── emailNode.js
 │   │   ├── mathNode.js
 │   │   ├── filterNode.js
 │   │   └── delayNode.js
 │   ├── ui.js
 │   ├── submit.js
 │   └── store.js
 │
backend/
 └── main.py
```

---

# Setup Instructions

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```txt
http://localhost:3000
```

---

## Backend Setup

Install dependencies:

```bash
pip install fastapi uvicorn python-multipart
```

Run backend:

```bash
cd backend
uvicorn main:app --reload
```

Backend runs on:
```txt
http://127.0.0.1:8000
```

---

# API Endpoint

## POST `/pipelines/parse`

Analyzes workflow graph.

### Request

```json
{
  "nodes": [],
  "edges": []
}
```

### Response

```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

---

# Example Workflow

```txt
Input → Text → LLM → Output
```

---

# Future Improvements

- Real-time pipeline execution
- Node data propagation
- Workflow persistence
- Authentication
- Export/import pipelines
- Custom edge styling
- Real AI model integration

---

# Author

Sathwik Deshapathi# vectorshift-pipeline-builder