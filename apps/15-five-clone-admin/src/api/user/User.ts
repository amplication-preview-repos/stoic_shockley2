import { CheckIn } from "../checkIn/CheckIn";
import { JsonValue } from "type-fest";

export type User = {
  checkIns?: Array<CheckIn>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
