// api/controllers/documentController.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { convertDocToDocx } from '../utils/docConverter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(__dirname, '../templates/template.docx');
const convertedTemplatePath = path.join(__dirname, '../templates/template-converted.docx');

export const processDocument = async (req, res) => {
  const { fragmentContent } = req.body;

  try {
    // Convertir el archivo .doc a .docx
    //await convertDocToDocx(templatePath, convertedTemplatePath);

    // Leer el contenido del template .docx convertido
    const content = fs.readFileSync(convertedTemplatePath, 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip);

    // Setear los datos para el template
    doc.setData({
      fragment: fragmentContent,
    });

    // Procesar y renderizar el documento
    doc.render();

    // Generar un blob del documento generado
    const generatedBlob = doc.getZip().generate({
      type: 'nodebuffer',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    // Enviar el archivo modificado al cliente
    res.setHeader('Content-Disposition', 'attachment; filename=modified-document.docx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.send(generatedBlob);
  } catch (error) {
    console.error('Error processing document:', error);
    res.status(500).send('Error processing document. Please try again.');
  }
};
