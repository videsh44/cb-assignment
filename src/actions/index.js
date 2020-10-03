import { v4 } from "node-uuid";

export const createJob = (
  franchise,
  address,
  customerName,
  lossType,
  jobStatus,
  dateReceived
) => ({
  type: "CREATE_JOB",
  id: v4(),
  franchise,
  address,
  customerName,
  lossType,
  jobStatus,
  dateReceived,
});
