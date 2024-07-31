import { pad } from "./string";

function parseSecondsTime(time: number) {
  const millis = pad(String((time % 1) * 1000).split(".")[0], 3);
  const minutes = pad(Math.floor(time / 60));
  const seconds = pad(Math.round(time % 60));
  const hours = pad(Math.round(time / 3600));

  return `${hours}:${minutes}:${seconds}:${millis}`;
}

export { parseSecondsTime };
