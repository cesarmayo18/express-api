import "reflect-metadata";
import express, { Request, Response } from "express";
import { ValidationRequests } from "./models/validationRequests";
import connection from "./connection";

const app = express();

app.use(express.json());

app.get("/firstValidation", async (req: Request, res: Response): Promise<Response> => {
  const first: ValidationRequests[] = await ValidationRequests.findAll();
  return res.status(200).json(first);
});

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
