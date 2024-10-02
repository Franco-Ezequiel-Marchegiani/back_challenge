**Español/spanish:**
# ¿Cómo montar este proyecto?

Asegurate de instalar todas las dependencias y de instalar "npm" en tu carpeta junto a los archivos

## Configuración de Base de Datos Local:

Para que todo el script funcione, deberás ejecutar estos comandos para crear una Base de Datos, y una tabla en tu entorno local:

### Scripts para crear la tabla:

- CREATE DATABASE info_user;
- USE info_user;

- (Creamos la tabla de users con estas columnas e info:)
***CREATE TABLE users (***
    ***id INT AUTO_INCREMENT PRIMARY KEY,***
    ***username VARCHAR(50) NOT NULL,***
    ***email VARCHAR(100) NOT NULL UNIQUE,***
    ***password VARCHAR(255) NOT NULL,***
    ***created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP***
***);***

### Configuración .env file:

Asignar los valores correspondientes para configurar la base de datos, puedes reemplazar los valores del archivo .env, o colocarlo directamente en ***src > config > database.js***

**-DB_HOST=localhost**
**-DB_USER=root**
**-DB_PASSWORD=tuClave**
**-DB_NAME=tuInfoName**

### Scripts ejecución

Una vez instalado y configurado todo, acceder a la carpeta "src" de esta manera:

### Orden de comandos:

- cd src
- node app.js

### Explicación:

Accedemos primero a la carpeta "src", para ejecutar el archivo "app.js", que se encuentra adentro de dicha carpeta.

Una vez hecho esto, se mostrará un mensaje en consola diciendo:

**Servidor corriendo en el puerto 5056** (cambiar N° de puerto a gusto, por defecto levanta el proyecto en el puerto N° 5056)

**Inglés/English:**