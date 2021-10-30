import { runWebApp } from "./single";

export function runMultipleApp(
  n: number,
  portBegin: number,
  portEnd: number,
  name: string,
  health?: string
): void {
  if (n != portEnd - (portBegin - 1)) {
    throw new Error("Your number flags isn't equal to port-begin and port-end");
  }
  let port = portBegin;

  for (let i = 0; i < n; i++) {
    if (port <= portEnd) {
      runWebApp(port, name, health);
      port++;
    } else {
      throw new Error(
        "There is not port available to use with your parameters"
      );
    }
  }
}
