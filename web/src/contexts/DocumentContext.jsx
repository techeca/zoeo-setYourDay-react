import { createContext, useState, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

// Creamos el contexto
const DocumentContext = createContext();

// Creamos un custom hook para usar este contexto
export const useDocument = () => {
  return useContext(DocumentContext);
};

// Creamos el proveedor del contexto
export const DocumentProvider = ({ children }) => {
  const [document, setDocument] = useState(null); // Estado inicial vacío
  const [documentSelected, setDocumentSelected] = useState('');
  const [youDay, setYouDay] = useState(false);
  const [state, setState] = useState('p1');
  const { user } = useAuth()
  const socketRef = useRef(null);
  const [otherUsers, setOtherUsers] = useState([])

  // Función para actualizar el documento
  const setDocumentData = (newDocument) => {
    setDocument(newDocument);
  };

  const setUserData = (newUser) => {
    setUser(newUser);
  };

  const resetDocument = () => {
    setYouDay(false);
    setDocumentSelected('');
    setState('p1');
    setOtherUsers([]);
    setDocument(null);
  };

  const sendChanges = (key, texto, inputSelected) => {
    if (socketRef.current) {
      //const username = localStorage.getItem(user)
      //console.log(user);
      socketRef.current.emit('edit', { documentSelected, key, texto, user, inputSelected });
    }
  };

  // Conectar al socket cuando el documento se seleccione
  useEffect(() => {
    if (!documentSelected) return;

    if (!socketRef.current) {
      socketRef.current = io(import.meta.env.VITE_API_URL);

      // Unirse al documento
      socketRef.current.emit('join', documentSelected);

      // Manejar eventos
      socketRef.current.on('init', (data) => {
        setDocumentData(data);
        setState('p2')
      });

      socketRef.current.on('update', (changes) => {
        const { updatedDocument, otherUser, inputSelected } = changes
        setDocumentData((prevDocument) => ({
          ...prevDocument,
          ...updatedDocument
        }))
        setOtherUsers((prevOtherUser) => {
          const existingIndex = prevOtherUser.findIndex(
            (entry) => entry.username === otherUser.username //entry.key !== inputSelected &&
          );

          if (existingIndex !== -1) {
            // Si ya existe, actualiza la entrada
            const updatedUsers = [...prevOtherUser];
            updatedUsers[existingIndex] = { key: inputSelected, username: otherUser.username };
            return updatedUsers;
          }

          // Si no existe, agrega una nueva entrada
          return [...prevOtherUser, { key: inputSelected, username: otherUser.username }];
        });
      });
    }

    // Cleanup
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };

  }, [documentSelected]);

  return (
    <DocumentContext.Provider value={{
      document,
      setDocumentData,
      documentSelected,
      setDocumentSelected,
      youDay,
      setYouDay,
      resetDocument,
      state,
      setState,
      sendChanges,
      otherUsers
    }}>
      {children}
    </DocumentContext.Provider>
  );
};