import * as sql from 'mssql';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration: sql.config = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  requestTimeout: 15000,
  options: {
    encrypt: true,
    trustServerCertificate: true, // Accept self-signed certificates
  },
};

export default configuration;