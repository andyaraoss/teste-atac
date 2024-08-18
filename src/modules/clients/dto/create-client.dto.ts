import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do cliente',
    default: 'Cliente teste',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Email do cliente',
    default: 'clienteteste@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Telefone do cliente', default: '11999999700' })
  @IsString()
  @IsNotEmpty()
  @Length(11)
  telefone: string;

  @ApiProperty({
    description: 'Coordenadas do cliente',
    default: '(32.012,17.810)',
  })
  @IsNotEmpty()
  @IsString()
  coordenadas: string;
}
