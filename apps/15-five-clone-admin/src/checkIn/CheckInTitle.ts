import { CheckIn as TCheckIn } from "../api/checkIn/CheckIn";

export const CHECKIN_TITLE_FIELD = "createdBy";

export const CheckInTitle = (record: TCheckIn): string => {
  return record.createdBy?.toString() || String(record.id);
};
