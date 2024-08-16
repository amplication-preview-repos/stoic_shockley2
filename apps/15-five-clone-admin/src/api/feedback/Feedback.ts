export type Feedback = {
  comment: string | null;
  createdAt: Date;
  givenAt: Date | null;
  givenBy: string | null;
  id: string;
  rating: number | null;
  receivedBy: string | null;
  updatedAt: Date;
};
