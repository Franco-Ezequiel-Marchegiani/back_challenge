**Español/spanish:**
# ¿Cómo montar este proyecto?

Asegurate de instalar todas las dependencias y de instalar "npm" en tu carpeta junto a los archivos

## Configuración de Base de Datos Local:

Para que todo el script funcione, deberás ejecutar estos comandos para crear una Base de Datos, y una tabla en tu entorno local:

### Scripts para crear la tabla:

- CREATE DATABASE info_user;
- USE info_user;

- (Creamos la tabla de users con estas columnas e info:)
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Configuración .env file:

Asignar los valores correspondientes para configurar la base de datos, puedes reemplazar los valores del archivo .env, o colocarlo directamente en ***src > config > database.js***
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tuClave
DB_NAME=tuInfoName
```
### Scripts ejecución

Una vez instalado y configurado todo, acceder a la carpeta "src" de esta manera:

### Orden de comandos:

- cd src
- node app.js

### Explicación:

Accedemos primero a la carpeta "src", para ejecutar el archivo "app.js", que se encuentra adentro de dicha carpeta.

Una vez hecho esto, se mostrará un mensaje en consola diciendo:

**Servidor corriendo en el puerto 5056** 
(cambiar N° de puerto a gusto, por defecto levanta el proyecto en el puerto N° 5056)

**Inglés/English:**

# How to set up this project?

Make sure to install all dependencies and install "npm" in your folder along with the files.

## Local Database Configuration:

For the entire script work, you must run this commands to create a Data Base and a table in your local environment:

### Scripts to create the table:

- CREATE DATABASE info_user;
- USE info_user;

- (We create the users table with these columns and info:)
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### .env file configuration:

Set the corresponding values configure the database, you can change the values on the .env file, o set them directly in ***src > config > database.js***

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tuClave
DB_NAME=tuInfoName
```


### Execution Scripts: 
Once you have everything installed and configured, access to the "src" folder like this:

### Command Order:

- cd src
- node app.js

### Explanation:

First, we access the "src" folder to run the "app.js", which is located inside that folder.

And once this is done, there'll be a message in the console saying:

**Servidor corriendo en el puerto 5056** 
(Change the number of the port as desired; by default, the project runs on port No. 5056)