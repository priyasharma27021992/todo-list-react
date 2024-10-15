import { useState } from "react";

export const AddTask = ({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) => {
  const [text, setText] = useState("");
  return (
    <div className="add-task">
      <label htmlFor="task-input"></label>
      <input
        placeholder="Add Task"
        type="text"
        name="task-input"
        id="task-input"
        value={text}
        autoFocus
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};
