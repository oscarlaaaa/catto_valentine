export async function wait(timeMs: number) {
  return new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, timeMs);
  });
}
