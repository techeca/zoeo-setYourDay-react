//import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAlert } from "../../contexts/AlertContext";
import { DocumentProvider, useDocument } from "../../contexts/DocumentContext";
import useDocumentAction from "../../hooks/useDocumentAction";
import { getAllDocuments, getDocument } from "../../utils/requests";
import NewDocument from "./NewDocument";
import { useEffect, useState } from 'react';

export default function Panel() {
  //const [youDay, setYouDay] = useState(false);
  const [allDocuments, setAllDocuments] = useState(false);
  const { document, setDocumentData, setState, state, documentSelected, setDocumentSelected } = useDocument();
  const [ documentName, setDocumentName] = useState('');
  const { showAlert } = useAlert();
  const { generateDocument } = useDocumentAction();
  //const navigate = useNavigate()
  //let location = useLocation();

  async function getDocuments() {
    //const token = localStorage.getItem('token')
    const response = await getAllDocuments()
    //console.log(response);
    setAllDocuments(response)
  }

  async function handleDocumentClick(documentId) {
    //const { document } = await getDocument(documentId)
    //setDocumentData(document); // Actualizamos el documento en el contexto
    setDocumentSelected(documentId)
    //setState('p2')
  };

  const handleGenerate = async () => {
    
    try {
      const { message, id } = await generateDocument(documentName);
      showAlert(message, 'success', id);
      //await getDocuments();
    } catch (error) {
      showAlert('Error al crear el documento', 'error', 'Error')
    }
}

  const handleClose = () => {
    setDocumentName('');
}

  useEffect(() => {
    getDocuments()
  }, [document])

  return (
    <div className="flex flex-row w-full">

      <div className="w-full flex flex-col items-center">

        <NewDocument />

        {/*<div className="p-3 flex gap-3">
        <div className="flex h-32 w-32 items-center justify-center border-2 rounded-md border-dashed border-border bg-gray-1">+</div>
      </div>*/}

        <div className={`${state === 'p1' ? 'opacity-100' : 'opacity-0 hidden'} flex flex-wrap w-full justify-center select-none pt-6 transition-opacity duration-300 ease-in-out`}>
          <label htmlFor="drawer-right" className="hover:scale-[102%] border-dashed flex justify-center h-[215px] items-center border-4 border-border card rounded-md m-3 p-4 cursor-pointer bg-gray-2 hover:opacity-100 opacity-80 transition-all duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-12 mb-3"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12"></path></svg>
          </label>
          {console.log(state)}
          {allDocuments && allDocuments.map((document) => (
            <div key={document._id} onClick={() => handleDocumentClick(document._id)} className="opacity-0 animate-fadeInCard card rounded-md m-3 p-4 cursor-pointer hover:bg-gray-4 hover:opacity-100 ">
              <div className="flex justify-between">
                <div className={`bg-gray-2 w-20 h-20 rounded-md`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-20 opacity-10" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm6.735-.693l1.332-.941a6 6 0 1 0-6.913 0l1.331.941L8.058 20h7.884zM8.119 10.97l1.94-.485a2 2 0 0 0 3.882 0l1.94.485a4.002 4.002 0 0 1-7.762 0"></path></svg>
                </div>
                <div>
                  <div className="text-xs bg-gray-2 p-1 rounded-md px-2 font-mono">
                    {document._id}
                  </div>
                  <p className="text-right font-mono text-sm mt-1 mr-1">
                    {document.datosIdentificacion?.edad && <span className="bg-gray-2 p-1 text-xs rounded-md">{document.datosIdentificacion.edad}</span>}
                  </p>
                </div>
              </div>
              <div className="bg-gray-2 p-3 rounded-md mt-2 flex flex-col gap-2">
                <p className="">
                  <span className="w-full badge badge-flat-primary font-semibold rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 mr-1" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2}><g fill="none" stroke="currentColor" strokeLinejoin="round"><path strokeLinecap="round" d="M7 21a2 2 0 0 1-2-2V3h9l5 5v11a2 2 0 0 1-2 2z"></path><path d="M13 3v6h6"></path><path strokeLinecap="round" d="M9 13h6m-6 4h6"></path></g></svg>
                    Documento: <span className="ml-1 font-normal">{document.nombreDocumento}</span>
                  </span>
                </p>
                <p className="">
                  <span className="w-full badge text-gray-100/70 font-semibold rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="size-4 mr-1" strokeWidth={2}><g fill="none" stroke="currentColor"><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><circle cx={12} cy={7} r={3}></circle></g></svg>
                    Nombre: {document.datosIdentificacion.nombreCompleto ? <i className="ml-1 font-normal capitalize">{document.datosIdentificacion.nombreCompleto}</i> : <i className="ml-1 font-normal">Sin nombre</i>}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <input type="checkbox" id="drawer-right" className="drawer-toggle" />
        <label className="overlay" htmlFor="drawer-right"></label>
        <div className="drawer drawer-right">
          <div className="drawer-content pt-10 flex flex-col h-full">
            <label onClick={handleClose} htmlFor="drawer-right" className="btn btn-sm rounded-md btn-ghost absolute right-2 top-2">✕</label>
            <div>
              <h2 className="text-xl font-medium">Seleccionar Documento</h2>
              {/* Document Dropdown */}
              <div className='flex gap-3 mt-2'>
                <select
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                  className='select w-full placeholder:text-white/30 bg-gray-2 border-0 text-sm text-white/50 py-2 px-2 rounded-md'
                >
                  <option value="" hidden disabled>Seleccionar</option>
                  <option value="TEA">Trastorno del Espectro Autista</option>
                </select>
              </div>
            </div>
            <div className="h-full flex flex-row justify-end items-end gap-2">
              <label onClick={handleClose} htmlFor="drawer-right" className="btn btn-ghost">Cancelar</label>
              <label disabled={true} onClick={handleGenerate} htmlFor="drawer-right" className="btn btn-primary">Crear</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}