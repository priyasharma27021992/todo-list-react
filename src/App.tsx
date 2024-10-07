import { useReducer } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { tasksReducer } from "./reducers/tasksReducer";
import { TaskList } from "./components/TaskList";

const initialTasks = [
  { id: 0, text: "Complete Leetcode tree task", done: true },
  { id: 1, text: "Complete ToDo list code", done: false },
  { id: 2, text: "Complete half of you don't know js first book", done: true },
];

let nextId = 3;

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const handleAddTask = (text: string) => {
    dispatch({ type: "added", id: nextId++, text: text });
  };
  const handleChangeTask = (task) => {
    dispatch({ type: "changed", task: task });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({ type: "deleted", id: taskId });
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
