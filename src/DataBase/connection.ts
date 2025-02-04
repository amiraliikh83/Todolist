import configuration from './Config/Configration';
import * as Sql from 'mssql';

export async function GetDatabaseRequest(): Promise<Sql.Request> {
  try {
    const pool = await Sql.connect(configuration);
    return pool.request();
  } catch (err) {
    console.error('Database Connection Failed:', err.message);
    throw new Error('Failed connect to database');
  }
}

// تابع تست اتصال به پایگاه داده
async function testConnection(): Promise<void> {
  try {
    const pool = await Sql.connect(configuration);
    console.log('Database connected successfully!');
    // پس از تست اتصال، در صورت نیاز اتصال را ببندید
    await pool.close();
  } catch (err) {
    console.error('Database Connection Failed:', err.message);
  }
}


// اجرای تابع تست اتصال
testConnection();

