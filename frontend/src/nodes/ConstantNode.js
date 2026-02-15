import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const ConstantNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.name || id.replace("constant-", "prompt_")
  );

  const [value, setValue] = useState(data?.value || "");

  return (
    <BaseNode
      nodeId={id}
      title="Constant"
      handles={[
        {
          type: "source",
          position: "Right",
          id: `${id}-value`,
        },
      ]}
    >
      {/* Name */}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      {/* Value */}
      <label>
        Value:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="You are a doctor..."
        />
      </label>

      <div style={{ fontSize: "11px" }}>
        Outputs a named static value (prompt/config)
      </div>
    </BaseNode>
  );
};
