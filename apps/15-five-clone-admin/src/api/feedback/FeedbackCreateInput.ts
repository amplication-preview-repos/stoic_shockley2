export type FeedbackCreateInput = {
  comment?: string | null;
  givenAt?: Date | null;
  givenBy?: string | null;
  rating?: number | null;
  receivedBy?: string | null;
};
