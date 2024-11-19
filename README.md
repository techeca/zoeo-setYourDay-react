# Proyecto de Formulario Síntesis de Reevaluación de NEE

Este proyecto facilita la edición de los Formularios Síntesis de Reevaluación de NEE, proporcionando una interfaz de usuario intuitiva y una API para gestionar y generar documentos basados en plantillas.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

    /   
    ├── api    
    │   ├── controllers 
    │   ├── middlewares  
    │   ├── routes          
    │   ├── utils
    │   ├── index.js
    │   ├── server.js
    │   ├── database.js
    │   └── package.json    
    ├── web
    │   ├── public  
    │   ├── src
    │   │   ├── components
    │   │   ├── hooks
    │   │   ├── contexts
    │   │   ├── utils
    │   │   ├── requests.js
    │   │   ├── App.jsx
    │   │   ├── main.jsx
    │   └── package.json 
    ├── README.md    
    └── package.json    

## Scripts

Los siguientes scripts están definidos en `package.json`:

- `dev:api`: Inicia el servidor de desarrollo utilizando Vite.
- `dev:web`: Inicia la API con Node.js.
- `build`: Construye el proyecto para producción.
- `lint`: Ejecuta ESLint para analizar el código y encontrar problemas.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

Desde la raíz del proyecto
```bash
cd api
npm install
cd ../web
npm install
```

## Uso

### Development

Para iniciar el servidor de desarrollo y la API simultáneamente, abre dos terminales. En la primera terminal, ejecuta:

```bash
npm run dev:web
```

En la segunda terminal, ejecuta:

```bash
npm run dev:api
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

[&check;] Autenticación y Autorización según documento.   
[&check;] Administración de Usuarios (Solo para cuenta de admin).     
[&check;] Administración de Documento.  
[ ] Ver modificación de otros usuarios IRT.  
[ ] Historial de modificaciones de documento.  
[ ] Filtro de documentos.  


### API
La API recibe la información del formulario y la guarda en una base de datos mongoDB. Cuando el usuario desea descargar el documento, se realiza una copia de un documento utilizado como plantilla y se insertan los datos del documento seleccionado. Finalmente, el documento modificado es descargado desde el cliente.

[&check;] Actualización de textos.  
[&check;] Actualización de checkbox.  
[&check;] Token en solicitudes.    