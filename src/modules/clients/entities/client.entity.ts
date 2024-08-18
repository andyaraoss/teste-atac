import { TCoordenadas } from '../interfaces/client.interfaces';

export class Client {
  readonly id: number;
  nome: string;
  email: string;
  telefone: string;
  coordenadas: TCoordenadas;
}
