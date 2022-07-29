import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { validate, fruitSchema, FruitData } from "../lib/validation";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/fruits", async (req, res) => {
    const fruits = await prisma.fruits.findMany();

    res.json(fruits);
});

router.get("/fruits/:id(\\d+)", async (req, res, next) => {
    const fruitId = Number(req.params.id);

    const fruit = await prisma.fruits.findUnique({
        where: { id: fruitId },
    });

    if (!fruit) {
        res.status(404);
        return next(`Cannot GET /fruits/${fruitId}`);
    }

    res.json(fruit);
});

router.post("/fruits", validate({ body: fruitSchema }), async (req, res) => {
    const fruitData: FruitData = req.body;

    res.status(200).json(fruitData);
});

router.put(
    "/fruits/:id(\\d+)",
    validate({ body: fruitSchema }),
    async (request, response, next) => {
        const fruitId = Number(request.params.id);
        const FruitData: FruitData = request.body;
        try {
            const fruit = await prisma.fruits.update({
                where: { id: fruitId },
                data: FruitData,
            });
            response.status(200).json(fruit);
        } catch (error) {
            response.status(404);
            next(`Cannot PUT /fruits/${fruitId}`);
        }
    }
);

router.patch(
    "/fruits/:id",
    validate({ body: fruitSchema }),
    async (req, res) => {
        const fruitData: FruitData = req.body;

        const fruitFound = await prisma.fruits.findUnique({
            where: { id: +req.params.id },
        });

        if (!fruitFound)
            return res.status(500).send({ message: "some error has occurred" });

        const { nutrition, ...fruits } = fruitData;

        const objToUpdate = {
            ...fruits,
            ...(nutrition && {
                fruits: {
                    update: nutrition.map((index) => {
                        const { ...nutrition } = index;
                        return {
                            where: {},
                            data: { ...nutrition },
                        };
                    }),
                },
            }),
        };

        const fruitUpdate = await prisma.fruits.update({
            where: { id: fruitFound.id },
            data: objToUpdate,
        });
        res.status(201).json(fruitUpdate);
    }
);

router.delete("/fruits/:id(\\d+)", async (request, response, next) => {
    const fruitId = Number(request.params.id);
    try {
        await prisma.fruits.delete({
            where: { id: fruitId },
        });
        response.status(204).end();
    } catch (error) {
        response.status(404);
        next(`Cannot DELETE /fruits/${fruitId}`);
    }
});

export default router;
