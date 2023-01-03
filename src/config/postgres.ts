import { Client, types } from "pg";
import Pool from "pg-pool";
require("dotenv").config();

const config: Pool.Config<Client> = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  ssl: false,
  max: 10,
};

types.setTypeParser(1114, (value) => {
  return new Date(value + "+0000").toISOString();
});

export const db = new Pool(config);
