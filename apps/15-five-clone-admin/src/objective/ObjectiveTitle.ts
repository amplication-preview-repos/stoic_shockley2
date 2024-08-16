import { Objective as TObjective } from "../api/objective/Objective";

export const OBJECTIVE_TITLE_FIELD = "title";

export const ObjectiveTitle = (record: TObjective): string => {
  return record.title?.toString() || String(record.id);
};
