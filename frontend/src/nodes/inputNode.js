import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { TextCursorInput } from "lucide-react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      icon={TextCursorInput}
      nodeId={id}
      title="Input"
      handles={[
        {
          type: "source",
          position: "Right",
          id: `${id}-value`,
          ariaLabel: "Input Value",
        },
      ]}
    >
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </label>

      <label>
        Type:
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};
