import { Handle, Position } from "reactflow";
import { useStore } from "../store";
import { X } from "lucide-react"; // Import icons
import "./BaseNode.css";

export const BaseNode = ({
  title,
  icon: Icon,
  handles = [],
  children,
  nodeId,
}) => {
  const removeNode = useStore((state) => state.removeNode);

  return (
    <div className="base-node">
      {/* Title Section */}
      <div className="base-node_title">
        <div className="title-left">
          {Icon && <Icon size={16} strokeWidth={2.5} />}
          <span>{title}</span>
        </div>
        <div className="title-actions">
          <X
            size={14}
            className="action-icon delete"
            onClick={() => removeNode(nodeId)}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="base-node_content">{children}</div>

      {/* Handles */}
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={Position[h.position]}
          id={h.id}
          className="base-node_handle"
          style={{ ...h.style }}
        />
      ))}
    </div>
  );
};
