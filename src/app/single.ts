import express, { Request, Response } from "express";

export function runWebApp(port: number, name: string, health?: string) {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    res.json(`${name} app is running on ::${port}`);
  });

  app.get("/health", (req: Request, res: Response) => {
    res.json({ health: health ?? "Ok" });
  });

  app.listen(port, () => console.log(`${name} app is running on ::${port}`));
}
