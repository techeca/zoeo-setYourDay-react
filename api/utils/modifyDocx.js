import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import JSZip from 'jszip'
import Docxtemplater from 'docxtemplater';
import { DOMParser, XMLSerializer } from 'xmldom';

// Función para extraer y analizar los checkboxes del documento
function extractCheckboxes(docXml) {
  try {
    const doc = new DOMParser().parseFromString(docXml, 'text/xml');
    const serializer = new XMLSerializer();
    const checkboxData = [];

    // Buscar elementos de checkbox por <w:ffData>
    const ffDataElements = doc.getElementsByTagName('w:ffData');
    for (let i = 0; i < ffDataElements.length; i++) {
      const nameElement = ffDataElements[i].getElementsByTagName('w:name')[0];
      const checkboxElement = ffDataElements[i].getElementsByTagName('w:checkBox')[0];

      if (nameElement && checkboxElement) {
        const checkboxName = nameElement.getAttribute('w:val');
        const checkedElement = checkboxElement.getElementsByTagName('w:checked')[0];
        let checkboxState = checkedElement.getAttribute('w:val');

        // Modificar el atributo w:val a cadena vacía ('')
        if(i === 9 || i === 10){
         checkedElement.setAttribute('w:val', '0');   //0:desactivado //1:activado
        }else{
          checkedElement.setAttribute('w:val', '1'); 
        }

        // Actualizar el estado después de la modificación
        checkboxState = checkedElement.getAttribute('w:val');

        checkboxData.push({
          id: i,  // Identificador único basado en el índice
          nombreCB: checkboxName,
          estado: checkboxState,
        });
      }
    }

    // Convertir el documento modificado de vuelta a XML
    const modifiedXml = serializer.serializeToString(doc);
    return { checkboxData, modifiedXml };

  } catch (error) {
    console.error('Error extrayendo y modificando checkboxes:', error);
    throw error;
  }
}

export const modifyDocxContent = async (templatePath, outputPath, jsonPath) => {
  try {
    // Verificar si el archivo de plantilla existe
    if (!fs.existsSync(templatePath)) {
      console.error(`El archivo ${templatePath} no existe.`);
      return;
    }

    // Leer el contenido del archivo .docx como binario
    const content = fs.readFileSync(templatePath, 'binary');

    // Leer el contenido del archivo JSON
    const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    // Cargar el contenido del archivo .docx con JSZip para modificar los checkboxes
    const zip1 = new JSZip();
    const zipContent = await zip1.loadAsync(content, { binary: true })

    const docXml = await zipContent.file('word/document.xml').async('text')
    const { checkboxData, modifiedXml } = extractCheckboxes(docXml);

    if (!modifiedXml) {
      console.error('Error al obtener el XML modificado.');
      return;
    }

    // Actualizar el contenido del archivo .docx con el XML modificado
    zipContent.file('word/document.xml', modifiedXml);

    // Generar el nuevo contenido del archivo .docx modificado
    const updatedContent = await zipContent.generateAsync({ type: 'nodebuffer' });

    // Guardar el documento .docx modificado
    fs.writeFileSync(outputPath, updatedContent);

    console.log(checkboxData);
    console.log(`Archivo con checkboxes modificados guardado en: ${outputPath}`);

    const outcontent = fs.readFileSync(outputPath, 'binary');
    const zip = new PizZip(outcontent);
    // Inicializar Docxtemplater con la plantilla
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Renderizar datos en la plantilla
    const datosIdentificacion = jsonContent.datosIdentificacion
    const profesional = jsonContent.profesional
    const diagnostico = jsonContent.diagnostico
    const documentos = jsonContent.documentos
    const revaluacion = jsonContent.revaluacion
    const evaluacionApoyos = jsonContent.evaluacionApoyos

    // Setear los datos para el template
    doc.render({
      //datosIdentificacion
      NOMBRECOMPLETOESTUDIANTE: datosIdentificacion.nombreCompleto,
      fnest: datosIdentificacion.fechaNacimiento,
      EDADEST: datosIdentificacion.edad,
      runest: datosIdentificacion.RUN,
      cursoest: datosIdentificacion.curso,
      ESTABLECIMIENTOEST: datosIdentificacion.establecimiento,
      rbd: datosIdentificacion.RBD,
      nombreDirector: datosIdentificacion.nombreDirector,

      NOMBREPROFESIONAL: profesional.nombreCompleto,
      rutpro: profesional.RUT,
      Profesionpro: profesional.profesion,
      Cargopro: profesional.cargo,
      fonopro: profesional.fono,
      emailpro: profesional.Profesional,
      fechapro: profesional.fecha,

      DiagnosticoObservaciones: diagnostico.observaciones,
      fechaEmi: diagnostico.fechaEmision,

      nroDocs: documentos.numeroDocumentos,

      DescIntSoc: revaluacion.interaccionSocial.progresos,
      EnfaIntSoc: revaluacion.interaccionSocial.aspectosEnfasis,

      DescLengCom: revaluacion.lenguajeComunicacion.progresos,
      EnfaLengCom: revaluacion.lenguajeComunicacion.aspectosEnfasis,

      DescCog: revaluacion.cognitiva.progresos,
      EnfaCog: revaluacion.cognitiva.aspectosEnfasis,

      DescProSen: revaluacion.procesamientoSensorial.progresos,
      EnfaProSen: revaluacion.procesamientoSensorial.aspectosEnfasis,

      DescMot: revaluacion.motora.progresos,
      EnfaMot: revaluacion.motora.aspectosEnfasis,

      aprendizajeLogrado: revaluacion.academicaFuncional.aprendizajeLogrado,
      aprendizajeNoLogrado: revaluacion.academicaFuncional.aprendizajeNoLogrado,
      logrosRelevantes: revaluacion.academicaFuncional.logrosRelevantes,

      DescdesPerSoc: revaluacion.desempenoPersonalSocial.progresos,
      EnfadesPerSoc: revaluacion.desempenoPersonalSocial.aspectosEnfasis,

      DescConFam: revaluacion.contextFamiliarSocial.progresos,
      EnfaConFam: revaluacion.contextFamiliarSocial.aspectosEnfasis,

      efecPer: evaluacionApoyos.personales.efectividad,
      obsPer: evaluacionApoyos.personales.observaciones,

      efecCur: evaluacionApoyos.curriculares.efectividad,
      obsCur: evaluacionApoyos.curriculares.observaciones,

      efecMedRecMat: evaluacionApoyos.mediosRecursosMateriales.efectividad,
      obsMedRecMat: evaluacionApoyos.mediosRecursosMateriales.observaciones,

      efecOrg: evaluacionApoyos.organizativos.efectividad,
      obsOrg: evaluacionApoyos.organizativos.observaciones,

      efecFam: evaluacionApoyos.familiares.efectividad,
      obsFam: evaluacionApoyos.familiares.observaciones,

      efecApo: evaluacionApoyos.otrosApoyos.efectividad,
      obsApo: evaluacionApoyos.otrosApoyos.observaciones,

      efecEst: evaluacionApoyos.estrategias.efectividad,
      descEst: evaluacionApoyos.otrosApoyos.descripcion,

      nuevosApo: evaluacionApoyos.nuevosApo,
      comentarios: evaluacionApoyos.comentarios
    });

    // Generar el documento modificado
    const generatedContent = doc.getZip().generate({ type: 'nodebuffer' });

    // Guardar el documento modificado
    fs.writeFileSync(outputPath, generatedContent);
    console.log(`Archivo con textos modificados guardado en: ${outputPath}`);
  } catch (error) {
    console.error('Error modificando documento:', error);
    throw error;
  }
};

// Función para cambiar el nombre del checkbox y guardarlo
export const changeCheckboxName = (templatePath, outputPath, checkboxId, newName) => {
  try {
    // Leer el contenido del archivo .docx
    const content = fs.readFileSync(templatePath);
    const zip = new PizZip(content);

    // Obtener el contenido del documento XML
    const docXml = zip.file('word/document.xml').asText();
    const doc = new DOMParser().parseFromString(docXml, 'text/xml');

    // Obtener el elemento del checkbox por su id
    const ffDataElements = doc.getElementsByTagName('w:ffData');
    const checkboxElement = ffDataElements[checkboxId];
    if (!checkboxElement) {
      throw new Error(`Checkbox con id ${checkboxId} no encontrado.`);
    }

    // Cambiar el nombre del checkbox
    const nameElement = checkboxElement.getElementsByTagName('w:name')[0];
    if (!nameElement) {
      throw new Error(`Elemento de nombre no encontrado para el checkbox ${checkboxId}.`);
    }
    nameElement.setAttribute('w:val', newName);

    // Serializar de vuelta el documento XML modificado
    const serializer = new XMLSerializer();
    const modifiedXml = serializer.serializeToString(doc);

    // Guardar el documento modificado de vuelta al archivo zip
    zip.file('word/document.xml', modifiedXml);

    // Guardar el archivo .docx modificado
    const generatedContent = zip.generate({ type: 'nodebuffer' });
    fs.writeFileSync(outputPath, generatedContent);
    console.log(`Nombre del checkbox ${checkboxId} cambiado a "${newName}". Documento guardado en ${outputPath}`);
  } catch (error) {
    console.error('Error modificando nombre del checkbox:', error);
    throw error;
  }
};

// Función para modificar los primeros 5 checkboxes a un estado de "1"
function modifyCheckboxes(docXml) {
  try {
    const doc = new DOMParser().parseFromString(docXml, 'text/xml');
    const serializer = new XMLSerializer();

    // Buscar elementos de checkbox por <w:ffData>
    const ffDataElements = doc.getElementsByTagName('w:ffData');
    //const checkedElement = ffDataElements[index].getElementsByTagName('w:checked')[0];

    for (let i = 0; i < ffDataElements.length; i++) {
      const checkedElements = ffDataElements[i].getElementsByTagName('w:checked');
      for (let j = 0; j < checkedElements.length; j++) {
        const element = checkedElements[j];
        //const currentState = element.getAttribute('w:val');
        //if (currentState === '0') {
        element.setAttribute('w:val', '');
        //}
      }
    }
    // Convertir el documento modificado de vuelta a XML
    const modifiedXml = serializer.serializeToString(doc);
    return modifiedXml;
  } catch (error) {
    console.error('Error modificando estado del checkbox:', error);
    throw error;
  }
}

// Función para cambiar el estado del checkbox a "1" y guardarlo
export const checkCheckbox = (templatePath, outputPath, checkboxId) => {
  try {
    // Leer el contenido del archivo .docx
    const content = fs.readFileSync(templatePath);
    const zip = new PizZip(content);

    // Obtener el contenido del documento XML
    const docXml = zip.file('word/document.xml').asText();
    const doc = new DOMParser().parseFromString(docXml, 'text/xml');

    // Obtener el elemento del checkbox por su id
    const ffDataElements = doc.getElementsByTagName('w:ffData');
    const checkboxElement = ffDataElements[checkboxId];
    if (!checkboxElement) {
      throw new Error(`Checkbox con id ${checkboxId} no encontrado.`);
    }

    // Cambiar el estado del checkbox a "1"
    const checkboxDataElement = checkboxElement.getElementsByTagName('w:checked')[0];
    if (!checkboxDataElement) {
      throw new Error(`Elemento de estado no encontrado para el checkbox ${checkboxId}.`);
    }
    checkboxDataElement.setAttribute('w:val', '1');

    // Serializar de vuelta el documento XML modificado
    const serializer = new XMLSerializer();
    const modifiedXml = serializer.serializeToString(doc);

    // Guardar el documento modificado de vuelta al archivo zip
    zip.file('word/document.xml', modifiedXml);

    // Guardar el archivo .docx modificado
    const generatedContent = zip.generate({ type: 'nodebuffer' });
    fs.writeFileSync(outputPath, generatedContent);
    console.log(`Estado del checkbox ${checkboxId} cambiado a "1". Documento guardado en ${outputPath}`);
  } catch (error) {
    console.error('Error cambiando estado del checkbox:', error);
    throw error;
  }
};
