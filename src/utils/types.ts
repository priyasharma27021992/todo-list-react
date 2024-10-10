import {
  TASK_ADDED_ACTION,
  TASk_CHANGED_ACTION,
  TASk_DELETED_ACTION,
} from "./actionTypes";

export type TaskType = {
  id: number;
  text: string;
  done?: boolean;
};

export type Action =
  | TASK_ADDED_ACTION
  | TASk_CHANGED_ACTION
  | TASk_DELETED_ACTION;
