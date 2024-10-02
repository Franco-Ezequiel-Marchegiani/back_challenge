import connection from '../config/database.js'; //Exportamos la conexión hecha a nuestra DB

export const removeUser = async (req, res) => {
  const { email } = req.body; // Recibe el email del cuerpo de la solicitud

  try {
    // Verificación de datos
    if (!email) {
      return res.status(400).json({ error: 'El email no se encuentra en la Base de Datos' });
    }

    // Consulta SQL para eliminar el usuario basado en el prop de email
    const query = 'DELETE FROM users WHERE email = ?';
    const [result] = await connection.execute(query, [email]);

    // Verificar si se eliminó algún registro
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } else {
      return res.status(404).json({ error: 'No se encontró un usuario con ese email' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al intentar eliminar el usuario' });
  }
};