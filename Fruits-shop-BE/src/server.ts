import express from "express";
import "express-async-errors";
import "dotenv/config";
import config from "./config";
import { ValidationErrorMiddleware } from "./lib/validation";
import { initCorsMiddleware } from "./lib/middleware/cors";
import generalRouter from "./routes/index";

const port = config.PORT

const app = express();
app.use(initCorsMiddleware);

app.use(express.json());

app.use(generalRouter);

app.use(ValidationErrorMiddleware);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
