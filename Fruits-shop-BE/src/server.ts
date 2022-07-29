import express from "express";
import "express-async-errors";
import "dotenv/config";
import { ValidationErrorMiddleware } from "./lib/validation";

import generalRouter from "./routes/index";

import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8080",
};

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use(ValidationErrorMiddleware);

app.use(generalRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
