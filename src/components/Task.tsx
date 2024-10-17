import { useState } from "react";
import { TaskType } from "../utils/types";

type TaskProps = {
  task: TaskType;
  onChange: (task: TaskType) => void;
  onDelete: (taskId: number) => void;
};

export const Task = ({ task, onChange, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <fieldset>
        <label htmlFor="taskDescription" hidden>
          TaskDescription
        </label>
        <input
          type="text"
          className="task-text"
          name="taskDescription"
          autoFocus
          value={task.text}
          onChange={(e) => onChange({ ...task, text: e.target.value })}
        />
      </fieldset>
    );
  } else {
    taskContent = <div className="task-text">{task.text}</div>;
  }

  return (
    <>
      <div className="task-input">
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
      </div>
      <div>
        {isEditing ? (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}
        <button type="button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </>
  );
};
