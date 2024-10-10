import { TaskType } from "../utils/types";
import { Task } from "./Task";

type TaskListProps = {
  tasks: Array<TaskType>;
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (taskId: number) => void;
};

export const TaskList = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
};
