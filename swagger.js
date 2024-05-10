import { version } from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { info } from "winston";

const options = {
    swaggerDefinition: {
        restapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My REST API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['**/*.js'],
}

const spec = swaggerJSDoc(options)

module.exports = (app) => {
    app.use('api-docs', swaggerUi.serve, swaggerUi.setup(spec))
}