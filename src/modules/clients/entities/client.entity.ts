export type Coordenadas = {
  x: number;
  y: number;
};

export class Client {
  readonly id: number;
  nome: string;
  email: string;
  telefone: string;
  coordenadas: Coordenadas;
}
