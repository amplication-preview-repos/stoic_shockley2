import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CheckInWhereInput = {
  checkInDate?: DateTimeNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  summary?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  weekEnding?: DateTimeNullableFilter;
};
