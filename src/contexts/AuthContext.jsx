import { createContext, useContext, useState, useEffect } from 'react';
import { handleUserLogin } from '../utils/requests';

// Crear el contexto
const AuthContext = createContext();

// Crear el proveedor
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario

    // Función de inicio de sesión
    const login = async (email, password) => {
        try {
            const { message, user, token } = await handleUserLogin(email, password);
            if (user && token) {
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en localStorage
                localStorage.setItem('token', token); // Guardar el token en localStorage
                return { message, user };
            }
        } catch (error) {   
            console.log(`error: ${error}`);
            return error
        }
    };

    // Función de cierre de sesión
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Eliminar el usuario de localStorage
        localStorage.removeItem('token');
    };

    // Verificar el usuario guardado en localStorage al cargar
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);