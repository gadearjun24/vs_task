import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { ExternalLink } from "lucide-react";
import { NodeField } from "../components/NodeField";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      icon={ExternalLink}
      nodeId={id}
      title="Output"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-value`,
          ariaLabel: "Output Value",
        },
      ]}
    >
      <NodeField label={"Name"}>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </NodeField>

      <NodeField label={"Type"}>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};
