import { Objective } from "../objective/Objective";

export type KeyResult = {
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  objective?: Objective | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
