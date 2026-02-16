import {
  TextCursorInput,
  Bot,
  ExternalLink,
  FileText,
  Split,
  Terminal,
  Merge,
  Anchor,
  StickyNote,
} from "lucide-react";

// Icon mapping based on your types
const ICONS = {
  customInput: TextCursorInput,
  llm: Bot,
  customOutput: ExternalLink,
  text: FileText,
  conditionNode: Split,
  loggerNode: Terminal,
  mergeNode: Merge,
  constantNode: Anchor,
  noteNode: StickyNote,
};

export const DraggableNode = ({ type, label }) => {
  const Icon = ICONS[type] || FileText;

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="draggable-node-item" // Use class instead of heavy inline styles
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <Icon size={14} className="node-icon" />
      <span>{label}</span>
    </div>
  );
};
