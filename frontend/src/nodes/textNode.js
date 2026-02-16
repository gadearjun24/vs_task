import React, { useState, useMemo, useEffect } from "react";
import { useUpdateNodeInternals, useStore } from "reactflow";
import { FileText, HelpCircle, Plus, Maximize2 } from "lucide-react";
import { AutoGrowTextarea } from "../components/AutoGrowTextarea";
import { BaseNode } from "../components/BaseNode";

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
  const updateNodeInternals = useUpdateNodeInternals();
  const edges = useStore((state) => state.edges);

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
    <BaseNode nodeId={id} title="Text" icon={FileText} handles={handles}>
      {/* Input Label Row */}
      <label>Text: </label>
      <AutoGrowTextarea
        value={currText}
        maxHeight={250}
        minHeight={50}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder='Type "{{" to utilize variables'
      />
    </BaseNode>
  );
};
