import { Sequelize } from "sequelize-typescript";
import { models } from "./models";
import fs from 'fs';

const connection = new Sequelize({
  dialect: "mysql",
  host: "db-tbk-do-user-9842690-0.b.db.ondigitalocean.com",
  port: 25060,
  username: "validation-user",
  password: "AVNS_WuZZfqoi_1208TJivOl",
  database: "tbk-validations",
  logging: false,
  models: models,
  dialectOptions: {
    ssl: {
      require: true,
      ca: fs.readFileSync('./ca-certificate.crt')
    },
  },
});

export default connection;