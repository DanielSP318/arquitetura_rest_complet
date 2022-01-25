import { Pool } from 'pg';

const connectionString = ''; // Coloque o link do seu banco de dados entre as aspas ''

const db = new Pool({ connectionString });

export default db;
