import { useDocument } from "../contexts/DocumentContext";
import { deleteDocument, handleCreateDocument, handleGenerateDocument } from "../utils/requests";

export default function useDocumentAction(){
    const { documentSelected, setDocumentData, resetDocument, setState, document } = useDocument();

    const generateDocument = async () => {
        try {
            const { document, message } = await handleCreateDocument(documentSelected);
            setDocumentData(document);
            setState('p2')
            return { message, id: document._id }
        } catch (error) {
            console.error('Error al generar el documento:', error);
        }
    };

    const downloadDocument = () => {
        console.log(document);
        if (document) {
            handleGenerateDocument(document);
        }
    };

    const delDocument = async () => {
        try {
            const response = await deleteDocument(document._id);
            const { message } = response.json();
            return { message } 
        } catch (error) {
            return { message: error }
        }
    }

    return { generateDocument, downloadDocument, resetDocument, delDocument };
}