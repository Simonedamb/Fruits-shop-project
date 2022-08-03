import { Static, Type } from "@sinclair/typebox";

export const userCreateSchema = Type.Object(
    {
        username: Type.String(),
        password: Type.String(),
    },
    { additionalProperties: false }
);

export type UserData = Static<typeof userCreateSchema>;
