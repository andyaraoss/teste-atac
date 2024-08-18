import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import * as format from 'pg-format';
import { Client, Coordenadas } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(@Inject('PG_CONNECTION') private conn: any) {}

  async create(createClientDto: CreateClientDto) {
    const { coordenadas, ...rest } = createClientDto;

    const queryString: string = format(
      `INSERT INTO clientes (%I, coordenadas)
      VALUES (%L, POINT(%L))
      RETURNING *;`,
      Object.keys(rest),
      Object.values(rest),
      coordenadas,
    );

    const queryResult = await this.conn.query(queryString);

    return queryResult.rows[0];
  }

  async findAll(query: Record<string, string> | {}) {
    const paramsCount = Object.keys(query).length;

    if (paramsCount > 0) {
      const queryString: string = format(
        `SELECT * FROM clientes
        WHERE %I = %L;`,
        Object.keys(query),
        Object.values(query),
      );

      const queryResult = await this.conn.query(queryString);

      if (!queryResult.rows[0]) {
        throw new NotFoundException('User not found!');
      }

      return queryResult.rows[0];
    }

    const queryResult = await this.conn.query(`SELECT * FROM clientes;`);

    return queryResult.rows;
  }

  async findBestRoute() {
    const calculateDistance = (
      client1: Coordenadas,
      client2: Coordenadas,
    ): number => {
      return Math.sqrt(
        (client1.x - client2.x) ** 2 + (client1.y - client2.y) ** 2,
      );
    };

    const getDbClients = await this.conn.query(`SELECT * FROM clientes;`);
    let allClients = getDbClients.rows;

    const initialPoint = { nome: 'Empresa', coordenadas: { x: 0, y: 0 } };

    const route: Array<Client | any> = [initialPoint];

    let currentPoint = route[0].coordenadas;

    allClients.forEach(() => {
      const nearestClient: Client = allClients.reduce(
        (nearest: Client, client: Client) =>
          calculateDistance(currentPoint, client.coordenadas) <
          calculateDistance(currentPoint, nearest.coordenadas)
            ? client
            : nearest,
      );

      route.push(nearestClient);
      currentPoint = nearestClient.coordenadas;

      allClients = allClients.filter(
        (client: Client) => client !== nearestClient,
      );
    });

    route.push(initialPoint);
    return route;
  }
}
