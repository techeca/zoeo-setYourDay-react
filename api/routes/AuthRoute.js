import express from 'express';
import { getAllProfesional, userLogin, userRegister } from '../controllers/AuthController.js'

const routerAuth = express.Router();

routerAuth.post('/login', userLogin);
routerAuth.post('/register', userRegister);
routerAuth.get('/allProfesional', getAllProfesional)

export default routerAuth