import { User } from "../user/User";

export type CheckIn = {
  checkInDate: Date | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  status?: "Option1" | null;
  summary: string | null;
  updatedAt: Date;
  user?: User | null;
  weekEnding: Date | null;
};
