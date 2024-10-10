import { ActionTypes } from "../utils/actionTypes";
import { Action, TaskType } from "../utils/types";

export function tasksReducer(tasks: Array<TaskType>, action: Action) {
  switch (action.type) {
    case ActionTypes.TASK_ADDED: {
      return [
        ...tasks,
        {
          id: action.payload.task.id,
          text: action.payload.task.text,
          done: false,
        },
      ];
    }
    case ActionTypes.TASK_CHANGED: {
      return tasks.map((task) => {
        if (task?.id === action?.payload?.task?.id) {
          return action?.payload.task;
        }
        return task;
      });
    }
    case ActionTypes.TASK_DELETED: {
      return tasks.filter((task: TaskType) => task.id !== action.payload.id);
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
}
