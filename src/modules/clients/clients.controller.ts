import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll(
    @Query()
    query: Record<string, string | number> | {},
  ) {
    return this.clientsService.findAll(query);
  }

  @Get('/route')
  findBestRoute() {
    return this.clientsService.findBestRoute();
  }
}
