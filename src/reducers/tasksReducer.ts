export function tasksReducer(tasks, action) {
  console.log("baby", action, tasks);
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) => {
        console.log("baby", task, action.task);
        if (task?.id === action?.task?.id) {
          return action?.task;
        }
        return task;
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
