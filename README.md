# VS Task – Pipeline Editor

A simple **pipeline editor** built with **React + React Flow** on the frontend and **FastAPI** on the backend.

Users can visually create pipelines using nodes and edges, submit the pipeline, and receive:

- Total number of nodes
- Total number of edges
- Whether the pipeline is a **DAG (Directed Acyclic Graph)**

---

## 📁 Project Structure

```text
vs_task/
├── frontend/   # React + React Flow frontend
└── backend/    # FastAPI backend
```

---

## 🚀 What This Project Does

### Frontend

- Drag and drop nodes to build a pipeline
- Connect nodes using edges
- Multiple node types (Input, Text, LLM, Merge, Condition, etc.)
- Submit pipeline to backend
- Shows analysis result in an alert

### Backend

- Receives pipeline data (nodes + edges)
- Counts total nodes and edges
- Checks whether the pipeline is a DAG
- Sends result back to frontend

---

## 🧰 Tech Stack

| Layer            | Technology        |
| ---------------- | ----------------- |
| Frontend         | React, React Flow |
| State Management | Zustand           |
| Backend          | FastAPI (Python)  |
| Graph Logic      | Kahn’s Algorithm  |
| API Format       | JSON              |

---

## ✅ Prerequisites

| Requirement | Version |
| ----------- | ------- |
| Node.js     | v16+    |
| npm         | Latest  |
| Python      | 3.10+   |
| pip         | Latest  |

---

## 🖥️ Run Backend (FastAPI)

### 1️⃣ Navigate to backend

```bash
cd backend
```

### 2️⃣ Create and activate virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

**`requirements.txt`**

```text
fastapi
uvicorn
```

### 4️⃣ Start backend server

```bash
python -m uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

---

## 🌐 Run Frontend (React)

### 1️⃣ Navigate to frontend

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm start
```

Frontend URL:

```text
http://localhost:3000
```

---

## 🔌 Backend API

### POST `/pipelines/parse`

#### Request Body

```json
{
  "nodes": [{ "id": "input-1", "id": "text-1" }],
  "edges": [{ "source": "input-1", "target": "text-1" }]
}
```

#### Response

```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

### Backend Logic

- Counts nodes and edges
- Builds directed graph
- Uses **Kahn’s Algorithm**
- If all nodes are visited → pipeline is a DAG

---

## 📤 Submit Pipeline (Frontend)

1. Click **Submit Pipeline**
2. Frontend sends nodes and edges to backend
3. Backend analyzes pipeline
4. Alert displays:

```text
Nodes: X
Edges: Y
Is DAG: Yes / No
```

---

## 🧩 Node Design – BaseNode

- All nodes use a shared **BaseNode**
- Handles layout, styling, and delete logic
- Makes adding new node types easy

Example usage:

```jsx
<BaseNode nodeId={id} title="Text" width={280} height={120} handles={handles}>
  <AutoGrowTextarea />
</BaseNode>
```
