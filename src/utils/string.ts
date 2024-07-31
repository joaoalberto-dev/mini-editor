function pad(value: string | number, count = 2) {
  return String(value).padStart(count, "0");
}

export { pad };
