import { Handle, Position } from "reactflow";
import { useStore } from "../store";
import "./BaseNode.css";

export const BaseNode = ({
  title,
  handles = [],
  children,
  width = 200,
  height = 80,
  nodeId, // 👈 REQUIRED to delete node
}) => {
  const removeNode = useStore((state) => state.removeNode);

  const onDelete = () => {
    // Optional confirm (recommended)
    if (window.confirm(`Delete "${title}" node?`)) {
      removeNode(nodeId);
    }
  };

  return (
    <div className="base-node" style={{ width, height }}>
      {/* Title + Delete */}
      <div className="base-node_title">
        <span>{title}</span>

        <button
          className="base-node_delete"
          onClick={onDelete}
          title="Delete node"
        >
          X
        </button>
      </div>

      {/* Content */}
      <div className="base-node_content">{children}</div>

      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={Position[handle.position]}
          id={handle.id}
          className="base-node_handle"
          style={{ ...handle.style }}
        />
      ))}
    </div>
  );
};
