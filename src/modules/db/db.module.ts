import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import 'dotenv/config';

const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB!,
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
