import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// const mongoose = require("mongoose");
import routes from './routes/index.js'
import error from './middlewares/error.js'
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from './swagger.js';

const app = express();

if(process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(ExpressMongoSanitize());

app.use(compression());

app.use(cors());
app.options('*', cors);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));
app.get('/', (req, res, next) => res.redirect('api-docs'));

app.use('/v1', routes);

app.use(error.converter);

app.use(error.notFound);

app.use(error.handler);

export default app;