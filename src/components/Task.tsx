import { useState } from "react";

export const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log("task", task);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <fieldset>
          <label htmlFor="taskDescription" hidden>
            TaskDescription
          </label>
          <input
            type="text"
            className="task-text"
            name="taskDescription"
            value={task.text}
            onChange={(e) => onChange({ ...task, text: e.target.value })}
          />
        </fieldset>
        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <div className="task-text">{task.text}</div>
        <button
          type="button"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <label htmlFor="status" hidden>
        Status
      </label>
      <input
        type="checkbox"
        name="status"
        checked={task.done}
        onChange={(e) => onChange({ ...task, done: e.target.checked })}
      />
      <div className="task-content">{taskContent}</div>
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </>
  );
};
