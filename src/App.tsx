import { useReducer } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { tasksReducer } from "./reducers/tasksReducer";
import { TaskList } from "./components/TaskList";
import { Action, TaskType } from "./utils/types";
import { ActionTypes } from "./utils/actionTypes";

const initialTasks = [
  { id: 0, text: "Complete Leetcode tree task", done: true },
  { id: 1, text: "Complete ToDo list code", done: false },
  { id: 2, text: "Complete half of you don't know js first book", done: true },
];

let nextId = 3;

function App() {
  const [tasks, dispatch] = useReducer<
    (state: TaskType[], actions: Action) => Array<TaskType>
  >(tasksReducer, initialTasks as Array<TaskType>);
  const handleAddTask = (text: string) => {
    dispatch({
      type: ActionTypes.TASK_ADDED,
      payload: {
        task: {
          id: nextId++,
          text: text,
        },
      },
    });
  };
  const handleChangeTask = (task: TaskType) => {
    dispatch({
      type: ActionTypes.TASK_CHANGED,
      payload: {
        task: task,
      },
    });
  };
  const handleDeleteTask = (taskId: number) => {
    dispatch({
      type: ActionTypes.TASK_DELETED,
      payload: {
        id: taskId,
      },
    });
  };
  return (
    <>
      <header>Tasks List</header>
      <main>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
