import { KeyResult } from "../keyResult/KeyResult";

export type Objective = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  keyResults?: Array<KeyResult>;
  title: string | null;
  updatedAt: Date;
};
