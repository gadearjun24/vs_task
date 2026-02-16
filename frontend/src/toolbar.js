import { DraggableNode } from "./draggableNode";
import "./toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <div className="pipeline-toolbar_container">
        <div className="toolbar-header">
          <span className="toolbar-tag">Nodes</span>
        </div>
        <div className="draggable-nodes-wrapper">
          <DraggableNode type="customInput" label="Input" />
          <DraggableNode type="llm" label="LLM" />
          <DraggableNode type="customOutput" label="Output" />
          <DraggableNode type="text" label="Text" />
          {/* <DraggableNode type="note" label="Note" /> */}
          <DraggableNode type="conditionNode" label="Condition" />
          <DraggableNode type="loggerNode" label="Logger" />
          <DraggableNode type="mergeNode" label="Merger" />
          <DraggableNode type="constantNode" label="Contants" />
          <DraggableNode type="noteNode" label="Note" />
        </div>
      </div>
    </div>
  );
};
