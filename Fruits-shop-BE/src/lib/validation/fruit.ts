import { Static, Type } from "@sinclair/typebox";

export const nutritionSchema = Type.Object(
    {
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
        nutrition: Type.Optional(nutritionSchema),
    },
    { additionalProperties: false }
);
export const nutritionSchemaUpdate = Type.Object(
    {
        id: Type.Integer(),
        carbohydrates: Type.Optional(Type.Number()),
        protein: Type.Optional(Type.Number()),
        fath: Type.Optional(Type.Number()),
        calories: Type.Optional(Type.Number()),
        sugar: Type.Optional(Type.Number()),
    },
    { additionalProperties: false }
);
export const fruitSchemaUpdate = Type.Object(
    {
        id: Type.Integer(),
        name: Type.Optional(Type.String()),
        genus: Type.Optional(Type.String()),
        image: Type.Optional(Type.String()),
        price: Type.Optional(Type.Number()),
        family: Type.Optional(Type.String()),
        order: Type.Optional(Type.String()),
        nutrition: Type.Optional(nutritionSchemaUpdate),
    },
    { additionalProperties: false }
);

export type nutritionResponse = {
    id: number;
    carbohydrates: number;
    protein: number;
    fath: number;
    calories: number;
    sugar: number;
};

export type fruitResponse = {
    id: number;
    name: string;
    genus?: string | null;
    image: string;
    price: number;
    family?: string | null;
    order: string;
    createdAt: Date;
    updatedAt: Date;
    nutrition?: nutritionResponse;
};

export type FruitData = Static<typeof fruitSchema>;
export type FruitDataUpdate = Static<typeof fruitSchemaUpdate>;
export type DetailsDataUpdate = Static<typeof nutritionSchemaUpdate>;
