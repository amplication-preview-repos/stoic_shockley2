import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeyResultListRelationFilter } from "../keyResult/KeyResultListRelationFilter";

export type ObjectiveWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  keyResults?: KeyResultListRelationFilter;
  title?: StringNullableFilter;
};
