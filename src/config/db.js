import dotenv from 'dotenv';
import {Sequelize} from 'sequelize';

// Inicializar ORM
dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 54153, 
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
          connectTimeout: 60000 // Aumentar timeout si es necesario
        }
    }
);

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos con éxito'))
    .catch(err => console.error('No se pudo conectar a la base de datos: ', err));

export default sequelize;