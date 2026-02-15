import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "true");

  return (
    <BaseNode
      nodeId={id}
      title="Condition"
      handles={[
        // Input
        {
          type: "target",
          position: "Left",
          id: `${id}-input`,
        },

        // True path
        {
          type: "source",
          position: "Right",
          id: `${id}-true`,
          style: { top: "30%" },
        },

        // False path
        {
          type: "source",
          position: "Right",
          id: `${id}-false`,
          style: { top: "70%" },
        },
      ]}
    >
      <label>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
