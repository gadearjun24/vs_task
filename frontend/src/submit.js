import { useStore } from "./store";
import "./submit.css"

// const BACKEND_URL = "http://localhost:8000";
const BACKEND_URL =
  "https://8000-firebase-vstask-1771132772375.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const onSubmit = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Analysis ✅
-------------------------
Nodes: ${result.num_nodes}
Edges: ${result.num_edges}
Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (err) {
      alert("Failed to submit pipeline");
      console.error(err);
    }
  };

  return (
    <div className="pipeline-submit-container">
      <button className="submit-button" onClick={onSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
