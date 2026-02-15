import React, { useState, useMemo, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { AutoGrowTextarea } from "../components/AutoGrowTextarea";
import { useUpdateNodeInternals, useStore } from "reactflow";

const extractVariables = (text) => {
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const vars = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }

  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState(data?.variables || []);

  const edges = useStore((state) => state.edges);
  const updateNodeInternals = useUpdateNodeInternals();

  /**
   * SAFE variable add + remove
   */
  useEffect(() => {
    const extracted = extractVariables(currText);

    setVariables((prev) => {
      const next = new Set(extracted);

      // Keep variables that still have edges
      prev.forEach((variable) => {
        const handleId = `${id}-var-${variable}`;
        const hasEdge = edges.some((edge) => edge.targetHandle === handleId);

        if (hasEdge) {
          next.add(variable);
        }
      });

      return Array.from(next);
    });
  }, [currText, edges, id]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  const handles = useMemo(() => {
    const inputHandles = variables.map((variable, index) => ({
      type: "target",
      position: "Left",
      id: `${id}-var-${variable}`,
      isConnectable: true,
      style: {
        top: `${((index + 1) / (variables.length + 1)) * 100}%`,
      },
    }));

    return [
      ...inputHandles,
      {
        type: "source",
        position: "Right",
        id: `${id}-output`,
        isConnectable: true,
      },
    ];
  }, [variables, id]);

  return (
    <BaseNode
      nodeId={id}
      title="Text"
      width={280}
      height={120}
      handles={handles}
    >
      <AutoGrowTextarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        maxHeight={160}
        placeholder="Type text with {{variables}}..."
      />
    </BaseNode>
  );
};
