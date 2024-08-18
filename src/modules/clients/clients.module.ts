import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
