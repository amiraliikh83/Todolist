import * as sql from 'mssql';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration: sql.config = {
  server: 'localhost',
  user: 'sa', // Use 'sa' user
  password: 'amirali048',
  database: 'TodoList',
  requestTimeout: 15000,
  options: {
    encrypt: false,
    trustServerCertificate: true, // Accept self-signed certificates
  },
};

export default configuration;
