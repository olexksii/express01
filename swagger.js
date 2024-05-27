import swaggerJSDoc from "swagger-jsdoc";
// const { version } = require('./package.json');
// import {version} from './package.json';

const url = 'http://localhost:5000';

const swaggerDefinition = {
    info: {
        contact: {
            email: 'webalpha128@gmail.com',
            name: 'Vadym',
        },
        description: 'Express-swagger-social login project.',
        license: {
            name: 'All Rights Reserved',
        },
        title: 'login project',
        // version,
    },
    openapi: '3.0.0',
    produces: ['application/json'],
    servers: [{ url }],
}

const route = () => `./routes/*.yaml`;

const apis = [route()];
const options = {
    apis,
    basePath:'/',
    swaggerDefinition,
};

export const swaggerSpec = swaggerJSDoc(options);