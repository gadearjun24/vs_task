import React, { useState, useMemo } from "react";
import { BaseNode } from "../components/BaseNode";

export const MergeNode = ({ id, data }) => {
  const [inputCount, setInputCount] = useState(data?.inputCount || 2);

  // Generate dynamic input handles
  const inputHandles = useMemo(() => {
    return Array.from({ length: inputCount }).map((_, index) => ({
      type: "target",
      position: "Left",
      id: `${id}-input-${index + 1}`,
      style: {
        top: `${((index + 1) / (inputCount + 1)) * 100}%`,
      },
    }));
  }, [inputCount, id]);

  const handles = [
    ...inputHandles,
    {
      type: "source",
      position: "Right",
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode nodeId={id} title="Merge" handles={handles}>
      <label>
        Inputs:
        <input
          type="number"
          min={1}
          max={10}
          value={inputCount}
          onChange={(e) => setInputCount(Math.max(1, Number(e.target.value)))}
        />
      </label>

      <div style={{ fontSize: "11px" }}>
        Merges multiple inputs into a single output
      </div>
    </BaseNode>
  );
};
