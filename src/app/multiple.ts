// run multiple app en rapport avec les argv
import express, { Request, Response } from 'express';

export function runMultipleApp(n: number, portBegin: number, portEnd: number, name: string): void {
    if (n != (portEnd - (portBegin - 1))) {
        throw new Error('Your number flags isn\'t equal to port-begin and port-end');
    }
    let port = portBegin;

    for (let i = 0; i < n; i++) {
        if (port <= portEnd) {
            runWebApp(port, name);
            port++;
        } else {
            throw new Error('There is not port available to use with your parameters');
        }
    }
}

function runWebApp(port: number, name: string) {
    const app = express();

    app.get('/', (req: Request, res: Response) => {
        res.json(`${name} app is running on ::${port}`);
    })

    app.listen(port, () => console.log(`${name} app is running on ::${port}`));
}