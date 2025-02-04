import * as sql from 'mssql';
import * as dotenv from 'dotenv';

dotenv.config();

const configuration: sql.config = {
  server: process.env.DB_SERVER || 'localhost',
  user: process.env.DB_USER || 'sa', // Use 'sa' user
  password: process.env.DB_PASSWORD || 'amirali048',
  database: process.env.DB_DATABASE || 'TodoList',
  requestTimeout: 15000,
  options: {
    encrypt: false,
    trustServerCertificate: true, // Accept self-signed certificates
  },
};

export default configuration;
