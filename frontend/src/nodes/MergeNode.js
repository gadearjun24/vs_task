import React, { useState, useMemo } from "react";
import { BaseNode } from "../components/BaseNode";
import { Merge } from "lucide-react";
import { NodeField } from "../components/NodeField";

const handleClampedNumberChange = ({ event, setValue, min, max }) => {
  const raw = event.target.value;

  // Allow empty while typing
  if (raw === "") {
    setValue("");
    return;
  }

  let num = Number(raw);
  if (Number.isNaN(num)) return;

  // Clamp between min and max
  num = Math.min(max, Math.max(min, num));
  setValue(num);
};

export const MergeNode = ({ id, data }) => {
  const [inputCount, setInputCount] = useState(data?.inputCount || 2);

  // Generate dynamic input handles
  const inputHandles = useMemo(() => {
    return Array.from({ length: inputCount }).map((_, index) => ({
      type: "target",
      position: "Left",
      id: `${id}-input-${index + 1}`,
      ariaLabel: `Input ${index + 1}`,
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
      ariaLabel: "Merged Output",
    },
  ];

  return (
    <BaseNode icon={Merge} nodeId={id} title="Merge" handles={handles}>
      <NodeField label={"Inputs"}>
        <input
          type="number"
          min={2}
          max={10}
          value={inputCount}
          onChange={(e) => {
            handleClampedNumberChange({
              event: e,
              setValue: setInputCount,
              min: 2,
              max: 10,
            });
          }}
        />
      </NodeField>

      <div style={{ fontSize: "11px" }}>
        Merges multiple inputs into a single output
      </div>
    </BaseNode>
  );
};
