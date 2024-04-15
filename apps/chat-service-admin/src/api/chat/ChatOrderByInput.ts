import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sessionId?: SortOrder;
  updatedAt?: SortOrder;
};
