import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import { validate, ValidationErrorMiddleware } from "../lib/validation";
import { userCreateSchema } from "../lib/validation/users";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/user", async (req, res, next) => {
    try {
        const user = await prisma.users.findMany();
        if (user.length > 0) {
            return res.status(200).send(user);
        }
        res.status(404).send("database vuoto");
    } catch (err) {
        res.status(404);
    }
    next("cannot get/users");
});

router.post(
    "/user",
    validate({ body: userCreateSchema }),
    async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const user = await prisma.users.create({
                data: {
                    username: username,
                    password: password,
                },
            });
            res.status(200).send(user);
        } catch (err) {
            res.status(404);
            next("cannot post/user");
        }
    }
);

router.use(ValidationErrorMiddleware);

export default router;
