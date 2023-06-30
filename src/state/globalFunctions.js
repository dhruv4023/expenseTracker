
export const DDMMYYYY = (YYYYMMDD) => {
  const a = YYYYMMDD.split("-");
  return a[2] + "/" + a[1] + "/" + a[0];
};

export const MXMNDate = (x) => {
  const date = new Date();
  date.setDate(date.getDate() + x);
  return date;
};
