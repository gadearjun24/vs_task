import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const LoggerNode = ({ id, data }) => {
  const [logLabel, setLogLabel] = useState(data?.label || "Logger");

  return (
    <BaseNode
      nodeId={id}
      title="Logger"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-input`,
        },
      ]}
    >
      <label>
        Label:
        <input
          type="text"
          value={logLabel}
          onChange={(e) => setLogLabel(e.target.value)}
        />
      </label>

      <div style={{ fontSize: "11px", color: "#555" }}>
        Logs incoming data for debugging
      </div>
    </BaseNode>
  );
};
