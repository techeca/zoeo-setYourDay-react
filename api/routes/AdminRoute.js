import express from 'express';
import jwt from 'jsonwebtoken'
import { connectDB } from '../database.js';
import bcrypt  from 'bcrypt'

const SALT_ROUNDS = 10; // Número de rondas para hash de la contraseña
const routerAdmin = express.Router();

routerAdmin.get('/allProfesional', async (req, res) => {
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
})

export default routerAdmin