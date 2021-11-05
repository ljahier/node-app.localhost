// import { createServer } from "net";

// export function checkIfPortIsAvailable(port: number): Boolean {
//   const server = createServer();

//   server.listen(port);
//   server.once("error", (err: Error) => {
//     // if (err.code === "EADDRINUSE") {
//     //   // port is currently in use
//     // }
//     console.log(err);
//     return false;
//   });
//   server.once("listening", () => {
//     server.close();
//     return true;
//   });
//   return false;
// }

// export function getNextPortAvailable(port: number) {
//     if (checkIfPortIsAvailable(port) === false) {
//         getNextPortAvailable(++port);
//     } else {
//         return port
//     }
// }
