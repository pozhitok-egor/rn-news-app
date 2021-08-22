const addZero = (val: number) => `0${val}`.slice(-2)

export const epochToDate = (time: number): string => {
  const timestamp = new Date(time*1000);
  const day = addZero(timestamp.getDate());
  const month = addZero(timestamp.getMonth());
  const year = addZero(timestamp.getFullYear());
  const hours = addZero(timestamp.getHours());
  const minutes = addZero(timestamp.getMinutes());
  return `${day}.${month}.${year} ${hours}:${minutes}`
}

export function ID() {
  return '_' + Math.random().toString(36).substr(2, 9);
};
