import dayjs from "dayjs";

export const DateTransfer = (date?: string | Date) => {
  return dayjs(date).format("DD/MM/YYYY");
}

export const getDayDiff = (date: Date) => {
  return Math.round(dayjs(date).diff(dayjs(), 'day', true));
}