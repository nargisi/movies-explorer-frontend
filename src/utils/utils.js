export const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}ч${minutes > 0 ? ` ${minutes}м` : ''}`;
};
