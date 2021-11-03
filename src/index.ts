import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm'
import cors from 'cors';
import routes from './routes';
require("dotenv").config();

const config:any = {
    "type": process.env.DB_DIALECT,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DEFAULT_DATABASE,
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/*"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }
const port = 3333
const app = express();
createConnection(config)

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});