import express from 'express';
import { processDocument, updateDocument, createDocument, listDocuments, findDocument, deleteDocument } from '../controllers/DocumentController.js';

const documentRouter = express.Router();

documentRouter.post('/process-document', processDocument);

documentRouter.post('/update-document', updateDocument);

documentRouter.post('/create-document', createDocument);

documentRouter.get('/list-documents', listDocuments)

documentRouter.get('/document/:id', findDocument)

documentRouter.delete('/delete-document', deleteDocument)

export default documentRouter;
