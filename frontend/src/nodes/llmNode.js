import React from "react";
import { BaseNode } from "../components/BaseNode";
import { Bot } from "lucide-react";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      icon={Bot}
      nodeId={id}
      title="LLM"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
          ariaLabel: "System Message",
        },
        {
          type: "target",
          position: "Left",
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
          ariaLabel: "Prompt",
        },
        {
          type: "source",
          position: "Right",
          id: `${id}-response`,
          ariaLabel: "Response",
        },
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
