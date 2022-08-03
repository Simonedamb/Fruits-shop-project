import express from "express";
import "express-async-errors";
import "dotenv/config";
import { ValidationErrorMiddleware } from "./lib/validation";

import generalRouter from "./routes/index";
import userRouter from "./routes/login";
import registerRouter from "./routes/users";

import cors from "cors";

const corsOptions = {
    origin: "http://localhost:3001",
};

const port = process.env.PORT;

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(registerRouter);

app.use(userRouter);

app.use(generalRouter);

app.use(ValidationErrorMiddleware);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
