import { Static, Type } from "@sinclair/typebox";

export const nutritionSchema = Type.Object(
    {
        // id: Type.Integer(),
        carbohydrates: Type.Number(),
        protein: Type.Number(),
        fath: Type.Number(),
        calories: Type.Number(),
        sugar: Type.Number(),
    },
    { additionalProperties: false }
);
export const fruitSchema = Type.Object(
    {
        name: Type.String(),
        genus: Type.Optional(Type.String()),
        image: Type.String(),
        price: Type.Number(),
        family: Type.Optional(Type.String()),
        order: Type.String(),
        nutrition: Type.Optional(Type.Array(nutritionSchema)),
    },
    { additionalProperties: false }
);
export type FruitData = Static<typeof fruitSchema>;
