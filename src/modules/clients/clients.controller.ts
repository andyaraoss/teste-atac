import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('client')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @ApiQuery({
    name: 'telefone',
    required: false,
    description: 'Pesquisa através do telefone.',
  })
  @ApiQuery({
    name: 'email',
    required: false,
    description: 'Pesquisa através do email.',
  })
  @ApiQuery({
    name: 'nome',
    required: false,
    description: 'Pesquisa através do nome.',
  })
  @Get()
  findAll(
    @Query()
    query: Record<string, string> | {},
  ) {
    return this.clientsService.findAll(query);
  }

  @Get('/route')
  findBestRoute() {
    return this.clientsService.findBestRoute();
  }
}
