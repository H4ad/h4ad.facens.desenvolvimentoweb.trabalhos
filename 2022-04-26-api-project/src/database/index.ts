//#region Imports

import { Connection, createConnection } from 'typeorm';
import { Logger } from '../utils/logger';

//#endregion

const logger = new Logger('Database');

/**
 * Método que cria a conexão com o banco de dados
 */
export async function getDatabaseConnection(): Promise<Connection> {
    logger.log('Inicializando o banco de dados...');

    const connection = await createConnection({
        type: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DATABASE_PORT && Number(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'faker',
        database: process.env.DATABASE_NAME || 'faker',
        logger: 'advanced-console',
        entities: [],
        synchronize: true,
        logging: true,
    });

    logger.log('Inicializado!');

    return connection;
}
