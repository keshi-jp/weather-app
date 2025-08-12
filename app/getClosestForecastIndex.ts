interface Arg {
  list: {
    dt_txt: string;
  }[];
}

export default function getClosestHourIndex(weather: Arg): number {
  const nowHour = new Date().getHours();
  let index = 0;

  for (let i = 0; i < weather.list.length; i++) {
    const hour = new Date(weather.list[i].dt_txt).getHours();
    if (nowHour === 0 || nowHour === 1 || nowHour === 2) {
      if (hour === 0) {
        index = i;
        break;
      }
    } else if (hour <= nowHour && nowHour - hour < 3) {
      index = i;
      break;
    }
  }
  return index;
}
