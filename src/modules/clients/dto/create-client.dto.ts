import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { Coordenadas } from '../entities/client.entity';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do cliente',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(11)
  telefone: string;

  @ApiProperty()
  @IsNotEmpty()
  coordenadas: Coordenadas;
}
