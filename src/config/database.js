/* eslint-disable no-undef */
/* Scripts a ejecutar en una MySQL local para que funcione:

Crear la tabla:
CREATE DATABASE info_user;

USE info_user;


Creamos la tabla de users con estas columnas e info:
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

import mysql from 'mysql2/promise';  // Hacemos la conexión a MySQL usando Promesas
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' }); // Cargar las variables de entorno desde .env

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,          // Leer el host desde .env
    user: process.env.DB_USER,          // Leer el usuario desde .env
    password: process.env.DB_PASSWORD,  // Leer la contraseña desde .env
    database: process.env.DB_NAME     // Cambiar información con su DB local
});

export default connection;