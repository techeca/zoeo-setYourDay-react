import React, { createContext, useState, useContext } from 'react';

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
  const [state, setState] = useState('p1')
  const [user, setUser] = useState(null)

  // Función para actualizar el documento
  const setDocumentData = (newDocument) => {
    setDocument(newDocument);
  };

  const setUserData = (newUser) => {
    setUser(newUser)
  };

  const resetDocument = () => {
    setYouDay(false);
    setDocumentSelected('');
    setState('p1')
  };

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
      user,
      setUserData
    }}>
      {children}
    </DocumentContext.Provider>
  );
};