import { KeyResultUpdateManyWithoutObjectivesInput } from "./KeyResultUpdateManyWithoutObjectivesInput";

export type ObjectiveUpdateInput = {
  createdBy?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  keyResults?: KeyResultUpdateManyWithoutObjectivesInput;
  title?: string | null;
};
