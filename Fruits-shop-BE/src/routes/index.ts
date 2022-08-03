import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { validate } from "../lib/validation";
import {
    FruitData,
    FruitDataUpdate,
    fruitResponse,
    fruitSchema,
    fruitSchemaUpdate,
} from "../lib/validation/fruit";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/fruits", async (req, res) => {
    const fruits = await prisma.fruits.findMany({
        include: {
            nutrition: true,
        },
    });

    res.json(fruits);
});

router.get("/fruits/:id(\\d+)", async (req, res, next) => {
    //@ts-ignore
    const fruitId = Number(req.params.id);

    const fruit = await prisma.fruits.findUnique({
        where: { id: fruitId },
        include: {
            nutrition: true,
        },
    });

    if (!fruit) {
        res.status(404);
        return next(`Cannot GET /fruits/${fruitId}`);
    }

    res.json(fruit);
});

router.post(
    "/fruits",
    // validate({ body: fruitSchema }),
    async (req, res, err) => {
        const fruitData: FruitData = req.body;

        const { nutrition, ...fruits } = fruitData;

        const objToSave = {
            ...fruits,
            ...(nutrition && {
                nutrition: {
                    create: { ...nutrition },
                },
            }),
        };
        console.log(objToSave);
        // @ts-ignore
        const newFruit: fruitResponse = await prisma.fruits.create({
            data: { ...objToSave },
        });
        console.log(newFruit);
        res.status(201).send(newFruit);
    }
);

router.patch(
    "/fruits/:id",
    validate({
        body: fruitSchemaUpdate,
    }),
    async (req, res) => {
        const fruitData: FruitDataUpdate = req.body;
        const fruitFound = await prisma.fruits.findUnique({
            where: { id: +req.params.id },
        });

        if (!fruitFound) {
            res.status(500);
        }

        const { nutrition, ...fruits } = fruitData;

        const objToSave = {
            ...fruits,
            ...(nutrition && {
                nutritions: {
                    update: {
                        where: { id: nutrition.id },
                        data: nutrition,
                    },
                },
            }),
        };
        const fruitUpdate = await prisma.fruits.update({
            where: { id: fruitFound?.id },
            data: objToSave,
        });
        res.status(201).json(fruitUpdate);
    }
);

router.delete("/fruits/:id(\\d+)", async (request, response, next) => {
    const fruitId = Number(request.params.id);
    console.log(fruitId);
    try {
        const nutritionsData = await prisma.nutrition.findMany({
            where: { fruitsId: fruitId },
        });
        // console.log(nutritionsData);
        await prisma.nutrition.deleteMany({
            where: { id: nutritionsData[0].id, fruitsId: fruitId },
        });
        await prisma.fruits.deleteMany({
            where: { id: fruitId },
        });
        response.status(204).end();
    } catch (error) {
        response.status(404);
        next(`Cannot DELETE /fruits/${fruitId}`);
        console.log(error);
    }
});

export default router;
