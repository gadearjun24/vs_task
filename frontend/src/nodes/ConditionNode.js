import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { Split } from "lucide-react";

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "true");

  return (
    <BaseNode
      icon={Split}
      nodeId={id}
      title="Condition"
      handles={[
        // Input
        {
          type: "target",
          position: "Left",
          id: `${id}-input`,
          ariaLabel: "Condition Input",
        },

        // True path
        {
          type: "source",
          position: "Right",
          id: `${id}-true`,
          style: { top: "30%" },
          ariaLabel: "Condition True",
        },

        // False path
        {
          type: "source",
          position: "Right",
          id: `${id}-false`,
          style: { top: "70%" },
          ariaLabel: "Condition False",
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
