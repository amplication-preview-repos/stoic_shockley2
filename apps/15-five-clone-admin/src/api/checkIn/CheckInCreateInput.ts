import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CheckInCreateInput = {
  checkInDate?: Date | null;
  createdBy?: string | null;
  status?: "Option1" | null;
  summary?: string | null;
  user?: UserWhereUniqueInput | null;
  weekEnding?: Date | null;
};
