// import addFormats from "ajv-formats";
import { Validator, ValidationError } from "express-json-validator-middleware";
import { ErrorRequestHandler } from "express";

const validator = new Validator({
    coerceTypes: true,
});

// addFormats(validator.ajv, ["date-time"])
//     .addKeyword("kind")
//     .addKeyword("modifier");

export const validate = validator.validate;

export const ValidationErrorMiddleware: ErrorRequestHandler = (
    error,
    req,
    res,
    next
) => {
    if (error instanceof ValidationError) {
        res.status(422).send({
            errors: error.validationErrors,
        });

        next();
    }
    if (error instanceof ValidationError) {
        res.status(500).send({
            errors: error.validationErrors,
        });

        next();
    } else {
        next(error);
    }
};

export * from "./fruit";
