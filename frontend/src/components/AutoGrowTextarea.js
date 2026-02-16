import { useRef, useEffect } from "react";

export const AutoGrowTextarea = ({
  value,
  onChange,
  placeholder = "",
  maxHeight = 200,
  minHeight = 50,
  className = "",
}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;
  }, [value, maxHeight]);

  return (
    <div className="input-container">
      <textarea
        ref={textAreaRef}
        className={[`text-input`, ...className]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={1}
        style={{ minHeight, maxWidth: 250, minWidth: 250, maxHeight }}
      />
    </div>
  );
};
