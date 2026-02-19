import { useState } from "react";
import { useStore } from "./store";
import "./submit.css";

const BACKEND_URL = "http://localhost:8000";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pipeline-submit-container">
      <button
        disabled={isSubmitting}
        className="submit-button"
        onClick={onSubmit}
        style={{ backgroundColor: `${isSubmitting ? "#313379" : "#6366f1"}` }}
      >
        {isSubmitting ? "Submitting..." : "Submit Pipeline"}
      </button>
    </div>
  );
};
