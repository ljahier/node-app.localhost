import express, { Request, Response } from "express";

export function runWebApp(port: number, name: string, health?: string, slow?: number) {
  const app = express();

  if (!slow) {
    slow = 0;
  }

  app.get("/", (req: Request, res: Response) => {
    setTimeout(() => res.json(`${name} app is running on ::${port}`), slow);
  });

  app.get("/health", (req: Request, res: Response) => {
    setTimeout(() => res.json({ health: health ?? "Ok" }), slow);
  });

  app.listen(port, () => console.log(`${name} app is running on ::${port}`));
}
