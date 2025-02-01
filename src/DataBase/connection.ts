import configuration from "./Config/Configration";
import * as Sql from 'mssql'

export async function GetDatabaseRequest():Promise<Sql.Request> {
    try {
        const pool = await Sql.connect(configuration)
        return pool.request();
    } catch (err) {
        console.error('Database Connection Faild:' , err.message);
        throw new Error('Failed connect to database');
    }
}