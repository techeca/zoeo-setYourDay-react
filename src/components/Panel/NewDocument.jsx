import { useState } from 'react';
import DocumentSelector from '../DocumentSelector';
import { useDocument } from '../../contexts/DocumentContext';
import useDocumentAction from '../../hooks/useDocumentAction';
import TEA from '../TEA';
import { plus } from '../../utils/icons';
import { useAlert } from '../../contexts/AlertContext';
import { deleteDocument } from '../../utils/requests';

export default function NewDocument() {
    //const [phase, setPhase] = useState(initialPhase);
    const { youDay, setYouDay, document, resetDocument, state, setState, setDocumentData } = useDocument();
    const { downloadDocument, delDocument } = useDocumentAction();
    const { showAlert } = useAlert()
    const [data, setData] = useState({
        otros: []
    })

    function handleState2() {
        setState('p2')
        setYouDay(true)
    }

    async function handleDelDocument(){
        try {
            const { message } = await deleteDocument(document._id)
            showAlert(message, 'error', 'Borrado')
            setDocumentData(null)
        } catch (error) {
            showAlert(message, 'error', 'Error')
        }
        resetDocument()
    }

    //console.log(youDay);
    //console.log(initialPhase);

    return (
        <div className='pt-9'>
            <div className={`card transition-all duration-300 ${youDay ? 'w-64 h-40' : 'h-32 w-32'} ${state === 'p1' ? 'opacity-100' : 'opacity-0 invisible hidden'} flex justify-center bg-gray-3 rounded-md p-3`}>
                <div className='card-body absolute pt-6 hover:opacity-70'>
                    <button className={`transition-opacity ${youDay ? 'opacity-0 invisible' : 'opacity-100'}`} onClick={() => setYouDay(true)}>
                        {plus}
                    </button>
                </div>
                <DocumentSelector />
            </div>

            {/* Document Display Section */}
            {state === 'p2' && (
                <div className="flex flex-col gap-3 pt-3">
                    <div className='flex gap-3 items-center flex-row'>
                        <span className="badge badge-md badge-flat-primary">{document.nombreDocumento}</span>
                        <button className="btn btn-sm btn-solid-success" onClick={() => downloadDocument()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-4' width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12l5 5m0 0l5-5m-5 5V4M6 20h12"></path></svg>
                            <span className='ml-1'>
                                Descargar Documento
                            </span>
                        </button>
                        <button className='btn btn-sm btn-solid-error' onClick={() => handleDelDocument()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-4' width="1em" height="1em" viewBox="0 0 24 24" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"></path></svg>
                            <span className='ml-1'>
                                Eliminar
                            </span>
                        </button>
                        <button className="btn btn-sm ml-auto hover:bg-gray-4 bg-gray-1" onClick={() => resetDocument()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-5' width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 5l-7 7m0 0l7 7m-7-7h14"></path></svg>
                        </button>
                    </div>
                    <TEA profesional={data?.profesional} />
                </div>
            )}
        </div>
    );
}
