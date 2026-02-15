import React from "react";
import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      nodeId={id}
      title="LLM"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: "Left",
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
        {
          type: "source",
          position: "Right",
          id: `${id}-response`,
        },
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
