import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { DbModule } from './modules/db/db.module';

@Module({
  imports: [ClientsModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
