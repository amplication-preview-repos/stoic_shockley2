import { ObjectiveWhereUniqueInput } from "../objective/ObjectiveWhereUniqueInput";

export type KeyResultCreateInput = {
  createdBy?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  objective?: ObjectiveWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
