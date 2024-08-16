import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  givenAt?: SortOrder;
  givenBy?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  receivedBy?: SortOrder;
  updatedAt?: SortOrder;
};
