import express from "express";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { validate } from "../lib/validation";
import { adminResponse } from "../lib/validation/fruit";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/fruits/admin", async (req, res) => {
    const admin = await prisma.admin.findMany({});

    res.json(admin);
});

router.post("fruits/admin", async (req, res) => {
    const objAdmin = {
        name: "",
        password: "",
    };
    const admin = await prisma.admin.create({
        data: { ...objAdmin },
    });
    res.status(201).send(admin);
});

export default router;
