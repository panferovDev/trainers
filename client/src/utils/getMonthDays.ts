export const getMonthDays = (currentDate: Date): Date[] => {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};
