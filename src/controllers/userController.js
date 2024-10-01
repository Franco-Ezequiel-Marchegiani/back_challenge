import connection from '../config/database.js'; //Exportamos la conexión hecha a nuestra DB

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  
  try {
    // Verificación de datos
      //Verificamos que los campos no estén vacíos
      if (!username || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }

      // Consulta para verificar si el email ya existe
      const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
      
      const [existingUser] = await connection.execute(checkEmailQuery, [email]);

      if (existingUser.length > 0) {
        // Si se encuentra un usuario con el mismo email
        return res.status(400).json({ error: 'El email ya está registrado' });
      }
      // Validación de contraseña: alfanumérica, que incluya mayuscula y minúscula, entre 6 y 20 caracteres

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,20}$/;
      //const passwordRegex = /^(?=.*[!#$%&/()=<>?@\\^{}[\]~])[A-Za-z0-9!#$%&/()=<>?@\\^{}[\]~]{6,20}$/; // Validación de alfanumérica, caracteres, y caracter especial
      console.log(passwordRegex);
      console.log(!passwordRegex.test(password));
      
      if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: 'La contraseña debe tener entre 6 y 20 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número' });
      }

    
    // Consulta SQL para insertar un nuevo usuario
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';


    // Ejecución de la consulta
    const [result] = await connection.execute(query, [username, email, password]);
    
    console.log([result]);
    
    // Verificar si la inserción fue exitosa
    if (result && result.insertId) {
      res.status(201).json({ message: 'Usuario registrado con éxito', userId: result.insertId });
    } else {
      res.status(500).json({ error: 'No se pudo registrar el usuario' });
    }

  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};