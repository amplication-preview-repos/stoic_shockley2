import { KeyResult as TKeyResult } from "../api/keyResult/KeyResult";

export const KEYRESULT_TITLE_FIELD = "title";

export const KeyResultTitle = (record: TKeyResult): string => {
  return record.title?.toString() || String(record.id);
};
