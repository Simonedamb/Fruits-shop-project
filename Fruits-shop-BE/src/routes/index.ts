import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import {
    validate,
    fruitSchema,
    FruitData,
    FruitDataUpdate,
    fruitSchemaUpdate,
    fruitResponse,
    nutritionSchema,
    nutritionSchemaUpdate,
} from "../lib/validation";

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
    validate({ body: fruitSchema }),
    async (req, res, err) => {
        const fruitData: FruitData = req.body;
        if (res.status(400)) {
            console.log(err);
        }

        const { nutrition, ...fruits } = fruitData;

        const objToSave = {
            ...fruits,
            ...(nutrition && {
                nutrition: {
                    create: nutrition.map((nutrition) => {
                        return {
                            carbohydrates: nutrition.carbohydrates,
                            protein: nutrition.protein,
                            fath: nutrition.fath,
                            calories: nutrition.calories,
                            sugar: nutrition.sugar,
                        };
                    }),
                },
            }),
        };
        //@ts-ignore
        const newFruit: fruitResponse = await prisma.fruits.create({
            data: objToSave,
        });
        res.status(201).json(newFruit);
    }
);

router.put(
    "/fruits/:id(\\d+)",
    validate({ body: fruitSchemaUpdate }),
    async (request, response, next) => {
        const fruitId = Number(request.params.id);
        const {  ...nutrition } = nutritionSchemaUpdate;
        const nutritionId=nutrition.id

        try {
            const fruit = await prisma.fruits.update({
                where:{id:fruitId},
                data:{
                    nutrition:{
                        createMany:{
                            data:[]
                        }
                    }
                }
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
    validate({ body: fruitSchemaUpdate }),
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
                nutrition: {
                    update: nutrition.map((nutritio) => {
                        const { id } = nutritio;
                        return {
                            where: { id },
                            data: {
                                carbohydrates: nutritio.carbohydrates,
                                protein: nutritio.protein,
                                fath: nutritio.fath,
                                calories: nutritio.calories,
                                sugar: nutritio.sugar,
                            },
                        };
                    }),
                },
            }),
        };
        //@ts-ignore
        const fruitUpdate: fruitResponse = await prisma.fruits.update({
            where: { id: fruitFound?.id },
            data: objToSave,
        });
        res.status(201).json(fruitUpdate);
    }
);

router.delete("/fruits/:id(\\d+)", async (request, response, next) => {
    const fruitId = Number(request.params.id);
    try {
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
