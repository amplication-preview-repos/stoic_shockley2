import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  givenAt?: DateTimeNullableFilter;
  givenBy?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  receivedBy?: StringNullableFilter;
};
