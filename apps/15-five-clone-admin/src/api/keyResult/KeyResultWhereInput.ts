import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ObjectiveWhereUniqueInput } from "../objective/ObjectiveWhereUniqueInput";

export type KeyResultWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  objective?: ObjectiveWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
