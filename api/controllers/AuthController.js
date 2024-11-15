import { connectDB } from '../database.js';
import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'

const SALT_ROUNDS = 10; // Número de rondas para hash de la contraseña

async function authenticateUser(email, password) {
    try {
        // Conectarse a la base de datos
        const { users } = await connectDB();

        // Buscar el usuario por correo electrónico
        const user = await users.findOne({ email });

        // Si el usuario no existe, retorna null
        if (!user) return null;

        // Comparar la contraseña ingresada con la almacenada (hashed) en la base de datos
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // Si la contraseña es incorrecta, retorna null
        if (!isPasswordValid) return null;

        // Retorna el usuario autenticado sin la contraseña
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    } catch (error) {
        console.error("Error al autenticar usuario:", error);
        return null;
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    // Verificar si las credenciales son válidas
    const user = await authenticateUser(email, password);
    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT con una clave secreta y datos del usuario
    const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    // Responder con el token y los datos básicos del usuario
    res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token,
        user: { id: user._id, username: user.username, role: user.role, email: user.email }
    });
}

export const userRegister = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        // Conectarse a la base de datos
        const { users } = await connectDB();

        // Verificar si el usuario ya existe por correo electrónico
        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'El correo electrónico ya está registrado' });
        }

        // Generar hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Crear el nuevo usuario
        const newUser = {
            email,
            username,
            role: 'Profesional',
            password: hashedPassword, // Guardar la contraseña hasheada
            createdAt: new Date()
        };

        // Insertar el usuario en la base de datos
        const result = await users.insertOne(newUser);

        // Responder con los datos del nuevo usuario (sin la contraseña)
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: { id: result.insertedId, email: newUser.email, username: newUser.username, role: newUser.role }
        });
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
}

export const getAllProfesional = async (req, res) => {
    try {
        const { users } = await connectDB();
        const allDocuments = await users.find().toArray();
        res.status(200).json({
            pros: allDocuments,
            message: 'Profesionales encontrados'
        });
    } catch (error) {
        console.error('Error al obtener los profesionales:', error);
        res.status(500).json({ error: 'Hubo un error al obtener los documentos' });
    }
}
