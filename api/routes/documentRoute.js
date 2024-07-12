import express from 'express';
import path from 'path';
import fs from 'fs';
//import convertDocToDocx from '../docConverter.js';
import { modifyDocxContent } from '../utils/modifyDocx.js';

const router = express.Router();

router.post('/process-document', async (req, res) => {
    const { documento } = req.body;
    const jsonPath = `public/${documento}.json`
    const templatePath = 'public/template.docx'; // Ruta al archivo .docx convertido
    const outputPath = 'public/modified-template.docx'; // Ruta para guardar el documento modificado
    console.log(documento);

    try {
        await modifyDocxContent(templatePath, outputPath, jsonPath);

        // Enviar el archivo modificado al cliente
        res.download(outputPath, 'modified-template.docx');
    } catch (error) {
        console.error('Error processing document:', error);
        res.status(500).send('Error processing document');
    }
});

router.post('/update-document', async (req, res) => {
    const { key, documento, texto } = req.body
    const jsonPath = `public/${documento}.json`

    // Leer el archivo JSON actual
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return res.status(500).json({ error: 'Error al leer el archivo JSON.' });
        }

        let jsonData = {};
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            console.error('Error al parsear el contenido JSON:', parseError);
            return res.status(500).json({ error: 'Error al parsear el contenido JSON.' });
        }

        // Actualizar los valores del archivo JSON según la key recibida
        for (let index = 0; index < Object.keys(jsonData[key]).length; index++) {
            const element = Object.keys(jsonData[key])[index]
            jsonData[key][element] = texto[element]
        }

        // Escribir de vuelta el archivo JSON actualizado
        fs.writeFile(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error al escribir en el archivo JSON:', writeErr);
                return res.status(500).json({ error: 'Error al escribir en el archivo JSON.' });
            }

            // Enviar respuesta de éxito
            res.json({ message: 'Archivo JSON actualizado correctamente.' });
        });
    });
})

export default router;
