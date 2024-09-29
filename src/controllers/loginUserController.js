import connection from '../config/database.js'; // Asegúrate de que esto apunte a tu conexión a la base de datos

export const loginUser = async (req, res) => {
    //Recibo la información que pasó el usuario por el request
  const { email, password } = req.body;

  try {
    // Verificación de datos
    if (!email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Consulta SQL para verificar el usuario
    const query = 'SELECT id, username, email, created_at FROM users WHERE email = ? AND password = ?';
    const [rows] = await connection.execute(query, [email, password]);

    
    // Comprobamos si se encontró algún usuario
    if (rows.length > 0) {
      // Devolvemos un mensaje de ok si salió todo bien, seguido de la info del usuario sin su pass
      return res.status(200).json({ message: 'ok', user: rows[0] });
    } else {
      return res.status(401).json({ error: 'Credenciales incorrectas, intente nuevamente' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};
