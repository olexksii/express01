import swaggerJSDoc from "swagger-jsdoc";

const options = {
    swaggerDefinition: {
        openapi: '3.1.0',
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
    apis: ['./*.js'],
}

const spec = swaggerJSDoc(options)

export default {spec}