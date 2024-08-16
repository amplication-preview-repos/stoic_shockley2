import { CheckInWhereInput } from "./CheckInWhereInput";
import { CheckInOrderByInput } from "./CheckInOrderByInput";

export type CheckInFindManyArgs = {
  where?: CheckInWhereInput;
  orderBy?: Array<CheckInOrderByInput>;
  skip?: number;
  take?: number;
};
