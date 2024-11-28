import { useEffect, useState, useRef } from 'react';
//import DocumentSelector from '../DocumentSelector';
import { useDocument } from '../../contexts/DocumentContext';
import useDocumentAction from '../../hooks/useDocumentAction';
import TEA from '../TEA';
//import { plus } from '../../utils/icons';
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
    const [generatedCode, setGeneratedCode] = useState('');
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [error, setError] = useState('');
    const modalRef = useRef(null);

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && code[index] === '') {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleInputChange = (index, value) => {
        if (value.length <= 1) {
            const newCode = [...code]
            newCode[index] = value.toUpperCase()
            setCode(newCode)

            // Move focus to next input
            if (value !== '' && index < 5) {
                inputRefs.current[index + 1]?.focus()
            }
        }
    }

    const handleSubmit = async () => {
        const enteredCode = code.join('')
        if (enteredCode === generatedCode) {
            try {
                const { message } = await deleteDocument(document._id)
                showAlert(message, 'success', 'Borrado');
                setDocumentData(null)
                setCode(['', '', '', '', '', ''])
            } catch (error) {
                showAlert('Error al borrar el documento', 'error', 'Error');
            } finally {
                if (modalRef.current) {
                    modalRef.current.checked = false;
                }
                resetDocument();
            }
        } else {
            setError('Código incorrecto. Por favor, inténtalo de nuevo.')
        }
    }

    const handleCloseModal = () => {
        //modalRef.current.checked = false
        setCode(['', '', '', '', '', '']);
        setGeneratedCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    }

    useEffect(() => {
        setGeneratedCode(Math.random().toString(36).substring(2, 8).toUpperCase());
    }, [])

    return (
        <div className='pt-9'>
            {/*<div className={`card transition-all duration-300 ${youDay ? 'w-64 h-40' : 'h-32 w-32'} ${state === 'p1' ? 'opacity-100' : 'opacity-0 invisible hidden'} flex justify-center bg-gray-3 rounded-md p-3`}>
                <div className='card-body absolute pt-6 hover:opacity-70'>
                    <button className={`transition-opacity ${youDay ? 'opacity-0 invisible' : 'opacity-100'}`} onClick={() => setYouDay(true)}>
                        {plus}
                    </button>
                </div>
                <DocumentSelector />
            </div>*/}

            {/* Document Display Section */}
            {state === 'p2' && (
                <div className="flex flex-col gap-3 pt-3">
                    <div className='flex gap-3 items-center flex-row xl:ml-[237px] lg:ml-[237px] md:ml-[200px] ml-[200px]'>
                        <span className="badge badge-md badge-flat-primary rounded-md py-2 text-xs px-3">{document.nombreDocumento}</span>
                        <button className="btn btn-sm btn-solid-success" onClick={() => downloadDocument()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-4' width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12l5 5m0 0l5-5m-5 5V4M6 20h12"></path></svg>
                            <span className='ml-1'>
                                Descargar Documento
                            </span>
                        </button>
                        <label className="btn btn-sm btn-solid-error" htmlFor="modal-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className='size-4' width="1em" height="1em" viewBox="0 0 24 24" ><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"></path></svg>
                            <span className='ml-1'>
                                Eliminar
                            </span>
                        </label>
                        <span className="tooltip tooltip-top ml-auto" data-tooltip="Volver">
                            <button className="btn btn-sm hover:bg-gray-4 bg-gray-1" onClick={() => resetDocument()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-5' width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 5l-7 7m0 0l7 7m-7-7h14"></path></svg>
                            </button>
                        </span>
                    </div>

                    <TEA profesional={data?.profesional} />

                    <input className="modal-state" id="modal-2" type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay" htmlFor="modal-2"></label>
                        <div className="modal-content flex flex-col gap-5 w-full">
                            <label htmlFor="modal-2" onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                            <h1 className="text-lg mb-[-18px]">Ingrese el código para continuar</h1>
                            <h2 className="text-sm text-gray-11">Por favor, ingrese el código de acceso mostrado abajo.</h2>
                            <div className="flex flex-col items-center gap-4 py-4">
                                <div className="text-2xl font-bold tracking-wider bg-gray-3 p-3 rounded">
                                    {generatedCode}
                                </div>
                                <div className="flex gap-2">
                                    {code.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            ref={(el) => inputRefs.current[index] = el}
                                            className="w-10 h-10 text-center text-lg rounded-md bg-gray-3"
                                        />
                                    ))}
                                </div>
                                {error && <p className="text-sm text-red-500">{error}</p>}
                            </div>
                            <button className={`w-full btn-error rounded-md py-2`} onClick={handleSubmit} >Continuar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
