import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "givenBy";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.givenBy?.toString() || String(record.id);
};
