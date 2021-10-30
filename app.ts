import {runMultipleApp} from './src/app/multiple';
import { getValue } from './src/utils/get-value';

const ARGV = process.argv;
const TYPE = process.argv[2];

switch (TYPE) {
    case "--type=multiple":
            runMultipleApp(Number(getValue(ARGV[3])), Number(getValue(ARGV[4])), Number(getValue(ARGV[5])), getValue(ARGV[6]));
        break;

    default:
        throw new Error('Please choose app type using: --type=single|multiple');
}