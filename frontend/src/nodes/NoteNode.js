import React, { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { AutoGrowTextarea } from "../components/AutoGrowTextarea";
import { StickyNote } from "lucide-react";

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(
    data?.note || "Condition evaluated to false"
  );

  return (
    <BaseNode
      icon={StickyNote}
      nodeId={id}
      title="Note"
      handles={[
        {
          type: "target",
          position: "Left",
          id: `${id}-input`,
        },
      ]}
      width={220}
      height={120}
    >
      <AutoGrowTextarea
        onChange={(e) => setNote(e.target.value)}
        value={note}
        maxHeight={200}
        placeholder="Explain why the condition failed..."
      />
    </BaseNode>
  );
};
