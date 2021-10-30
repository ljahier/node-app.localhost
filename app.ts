import { runMultipleApp } from "./src/app/multiple";
import { runWebApp } from "./src/app/single";
import { getValue } from "./src/utils/get-value";

const ARGV = process.argv;
const TYPE = process.argv[2];

switch (TYPE) {
  case "--type=single":
    runWebApp(
      Number(getValue(ARGV[3])),
      getValue(ARGV[4]),
      process.argv[5] ? getValue(process.argv[5]) : undefined
    );
    break;
  case "--type=multiple":
    runMultipleApp(
      Number(getValue(ARGV[3])),
      Number(getValue(ARGV[4])),
      Number(getValue(ARGV[5])),
      getValue(ARGV[6]),
      process.argv[7] ? getValue(process.argv[7]) : undefined
    );
    break;
  default:
    throw new Error("Please choose app type using: --type=single|multiple");
}
