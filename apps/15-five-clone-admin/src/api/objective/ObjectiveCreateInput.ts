import { KeyResultCreateNestedManyWithoutObjectivesInput } from "./KeyResultCreateNestedManyWithoutObjectivesInput";

export type ObjectiveCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  keyResults?: KeyResultCreateNestedManyWithoutObjectivesInput;
  title?: string | null;
};
