import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { Terminal } from "lucide-react";
import { NodeField } from "../components/NodeField";

export const LoggerNode = ({ id, data }) => {
  const [logLabel, setLogLabel] = useState(data?.label || "Logger");

  return (
    <BaseNode
      icon={Terminal}
      nodeId={id}
      title="Logger"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-input`,
          ariaLabel: "Logger Input",
        },
      ]}
    >
      <NodeField label={"Label"}>
        <input
          type="text"
          value={logLabel}
          onChange={(e) => setLogLabel(e.target.value)}
        />
      </NodeField>

      <div style={{ fontSize: "11px", color: "#555" }}>
        Logs incoming data for debugging
      </div>
    </BaseNode>
  );
};
