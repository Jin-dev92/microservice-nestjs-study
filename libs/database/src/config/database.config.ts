import { DataSource } from 'typeorm';
import * as process from 'node:process';

export const CommonDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + `/${process.env.DB_DATABASE}/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [__dirname + `/migrations/${process.env.DB_DATABASE}/*.js`],
});
