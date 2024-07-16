# Proyecto de Formulario Síntesis de Reevaluación de NEE

Este proyecto facilita la edición de los Formularios Síntesis de Reevaluación de NEE, proporcionando una interfaz de usuario intuitiva y una API para gestionar y generar documentos basados en plantillas.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

    /   
    ├── api    
    │   ├── controllers  
    │   ├── routes          
    │   ├── utils
    │   └── index.js    
    ├── public  
    ├── src
    │   ├── components
    │   ├── utils
    │   │   └── requests.js
    │   ├── App.jsx
    │   └── main.jsx     
    └── package.json    

## Scripts

Los siguientes scripts están definidos en `package.json`:

- `dev`: Inicia el servidor de desarrollo utilizando Vite.
- `build`: Construye el proyecto para producción.
- `api`: Inicia la API con Node.js.
- `lint`: Ejecuta ESLint para analizar el código y encontrar problemas.
- `preview`: Previsualiza la aplicación construida.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Uso

### Development

Para iniciar el servidor de desarrollo y la API simultáneamente, abre dos terminales. En la primera terminal, ejecuta:

```bash
npm run dev
```

En la segunda terminal, ejecuta:

```bash
npm run api
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Funcionalidades

### Frontend
El frontend consta de formularios que imitan los documentos originales, pero con restricciones de caracteres para evitar deformaciones en el documento final.

[ ] Autenticación y Autorización según documento.   
[ ] Administración de Usuarios (Solo para cuenta de admin).     
[ ] Administración de Documento (Solo para cuenta de admin).

### API
La API recibe la información del formulario y la guarda en un archivo JSON. Cuando el usuario desea descargar el documento, se realiza una copia de un documento utilizado como plantilla y se insertan los datos del JSON. Finalmente, el documento modificado se descarga desde el cliente.

[&check;] Actualización de textos.  
[] Actualización de checkbox.    