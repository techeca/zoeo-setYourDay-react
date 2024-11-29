import { cross } from '../../utils/icons';
import { useDocument } from '../../contexts/DocumentContext';
import useDocumentAction from '../../hooks/useDocumentAction';
import { useAlert } from '../../contexts/AlertContext';
import { useState } from 'react';

export default function DocumentSelector() {
    const { documentSelected, setDocumentSelected, youDay, resetDocument, setYouDay } = useDocument();
    const [ documentName, setDocumentName] = useState('');
    const { generateDocument } = useDocumentAction();
    const { showAlert } = useAlert();

    const handleGenerate = async () => {
        const { message, id } = await generateDocument(documentName);
        showAlert(message, 'success', id)
    }

    const handleClose = () => {
        setDocumentName('');
        setYouDay(false)
    }

    return (
        <div className={`transition-opacity duration-300 delay-300 ease-in-out flex flex-col gap-3 ${youDay ? 'opacity-100 z-20' : 'opacity-0 invisible'}`}>
            {/* Header + Close Button */}
            <div className='border-b-[1px] border-gray-50/10 flex justify-between items-center pb-2'>
                <label className='text-slate-12'>Seleccione un documento</label>
                <button className='hover:opacity-80 border-0 text-sm rounded-full' onClick={handleClose}>
                    {cross}
                </button>
            </div>

            {/* Document Dropdown */}
            <div className='flex gap-3 mt-1'>
                <select
                    value={documentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                    className='w-full placeholder:text-white/30 bg-gray-2 border-0 text-sm text-white/50 py-2 px-2 rounded-md'
                >
                    <option value="" hidden disabled>Seleccionar</option>
                    <option value="TEA">Trastorno del Espectro Autista</option>
                </select>
            </div>

            {/* Continue Button */}
            <div className='flex my-auto mx-auto'>
                <button 
                    className="btn bg-gray-2 hover:opacity-80 rounded-md" 
                    disabled={!documentName} 
                    onClick={() => handleGenerate()}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}
