import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import { validate, ValidationErrorMiddleware } from "../lib/validation";
import { userCreateSchema } from "../lib/validation/users";

const router = express.Router();
const prisma = new PrismaClient();

router.post(
    "/login",
    validate({ body: userCreateSchema }),
    async (req, res, next) => {
        const { username, password } = req.body;
        const user = await prisma.users.findUnique({
            where: { username: username },
        });
        if (user) {
            return res.status(200).send(user);
        }
        res.status(404);
        next("impossibile trovare l'utente");
    }
);

router.use(ValidationErrorMiddleware);

export default router;
