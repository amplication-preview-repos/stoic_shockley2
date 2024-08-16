import { KeyResultWhereInput } from "./KeyResultWhereInput";
import { KeyResultOrderByInput } from "./KeyResultOrderByInput";

export type KeyResultFindManyArgs = {
  where?: KeyResultWhereInput;
  orderBy?: Array<KeyResultOrderByInput>;
  skip?: number;
  take?: number;
};
