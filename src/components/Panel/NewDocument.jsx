import { useState } from 'react';
import DocumentSelector from '../DocumentSelector';
import formatos from '../../utils/formatos.json'
import TEA from '../TEA';
import { handleGenerateDocument } from '../../utils/requests';
import { plus } from '../../utils/icons';

export default function NewDocument() {
    const [state, setState] = useState('p1')
    const [youDay, setYouDay] = useState(false)
    const [documentSelected, setDocumentSelected] = useState('')
    const [data, setData] = useState({
        otros: []
    })
    const [newUser, setNewUser] = useState({
        nombreCompleto: '',
        profesion: '',
        fonoEmail: '',
        registroProfesional: ''
    })

    const newPro = {
        value: newUser,
        setValue: setNewUser,
        update: setData
    }

    const inter = {
        state: {
            value: youDay,
            setValue: setYouDay,
            phase: state,
            clean: cleanApp
        },
        document: {
            value: documentSelected,
            setValue: activeTask,
            newDocument: handleGenerateDay
        }
    }

    function handleGenerateDay() {
        if (documentSelected === '') {
        } else {
            setState('p2');
        }
    }

    function cleanApp() {
        setYouDay(false)
        setState('p1')
        setDocumentSelected('')
    }

    function activeTask(value) {
        setDocumentSelected(value)
        setData(formatos[value])
    }

    return (
        <>
            <div className={`card absolute mt-48 transition-all duration-300 ease-in-out ${youDay ? 'w-64 h-40' : 'h-32 w-32'} ${state === 'p1' ? 'opacity-100 z-20' : 'opacity-0 invisible'} flex justify-center bg-gray-3 rounded-md p-3 text-slate-12`}>
                {/*btn add (+) element */}
                <div className='card-body absolute pt-[24px] hover:opacity-70' >
                    <button className={`transition-opacity duration-300 delay-300 ease-in-out ${youDay ? 'opacity-0 invisible' : 'opacity-100 z-20'}`} onClick={() => setYouDay(true)}>
                        {plus}
                    </button>
                </div >
                <DocumentSelector inter={inter} />
            </div >

            {/*formatos*/}
            <div className={`transition-opacity duration-300 delay-300 ease-in-out ${state === 'p2' ? 'opacity-100 z-20' : 'opacity-0 invisible'} absolute mt-24 flex flex-col border-0 border-white p-6 gap-3`}>
                <div className='flex gap-3 items-center'>
                    <span className="badge badge-md badge-flat-primary py-1.5">{data.nombreDocumento}</span>
                    <button className="btn btn-sm btn-solid-error" onClick={() => cleanApp()}>Cerrar</button>
                    <button className="btn btn-sm btn-solid-success" onClick={() => handleGenerateDocument(documentSelected)}>Descargar Documento</button>
                </div>

                <div className="card max-w-[720px] w-[720px] bg-gray-3 border-[0px] border-gray-50/10">
                    <div className="card-body overflow-hidden">
                        <div className="accordion-group">
                            <TEA profesional={data?.profesional} newPro={newPro} inter={inter} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}