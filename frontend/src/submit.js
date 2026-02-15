// // submit.js

// export const SubmitButton = () => {

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }

import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

    console.log({ nodes, edges });

  const onSubmit = async () => {
    try {
      const response = await fetch(
        "https://8000-firebase-vstask-1771132772375.cluster-va5f6x3wzzh4stde63ddr3qgge.cloudworkstations.dev/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

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
    <div style={{ padding: 10 }}>
      <button onClick={onSubmit}>Submit Pipeline</button>
    </div>
  );
};
