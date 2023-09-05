import "dotenv/config";

import express, { Express, Response, Request } from "express";
import cors from "cors";
import emailNotificationAuth from "./src/routers/emailAuthConfirme.router";

export const app: Express = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(emailNotificationAuth);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Api rest email notification initialized " });
});

app.listen(PORT, () => {
  console.log("Initialized Server!!!");
});
