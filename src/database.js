// db.js
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'arduino';

async function conectar() {
try {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Conexión exitosa a la base de datos');
    return client.db(dbName);
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
}
}

export default conectar;
