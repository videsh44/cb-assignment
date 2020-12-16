import { v4 } from "node-uuid";

export const createJob = (
  eventName,
  description,
  venue,
  discount,
  discountNumber,
  price,
  dateReceived
) => ({
  type: "CREATE_JOB",
  id: v4(),
  eventName,
  description,
  venue,
  discount,
  discountNumber,
  price,
  dateReceived,
});
