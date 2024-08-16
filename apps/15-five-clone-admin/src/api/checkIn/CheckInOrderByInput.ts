import { SortOrder } from "../../util/SortOrder";

export type CheckInOrderByInput = {
  checkInDate?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  weekEnding?: SortOrder;
};
