import { TaskType } from "./types";

export enum ActionTypes {
  TASK_ADDED = "TASK_ADDED",
  TASK_CHANGED = "TASK_CHANGED",
  TASK_DELETED = "TASK_DELETED",
}

export type TASK_ADDED_ACTION = {
  type: ActionTypes.TASK_ADDED;
  payload: {
    task: {
      id: number;
      text: string;
    };
  };
};

export type TASk_CHANGED_ACTION = {
  type: ActionTypes.TASK_CHANGED;
  payload: {
    task: TaskType;
  };
};

export type TASk_DELETED_ACTION = {
  type: ActionTypes.TASK_DELETED;
  payload: {
    id: number;
  };
};
