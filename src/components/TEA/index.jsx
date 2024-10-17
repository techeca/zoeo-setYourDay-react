import DatosIdentificacion from "./DatosIdentificacion";
import DocumentosProcReval from "./DocumentosProcReval";
import EvaluacionApoyos from "./EvaluacionApoy";
import RevaluacionEspec from "./RevaluacionEspec";
import SintesisRevalDiag from "./SintesisRevalDiag";

export default function TEA({ profesional, newPro, inter }) {

    return (
        <>
            <DatosIdentificacion profesional={profesional} newPro={newPro} documentSelected={inter.document.value} />
            <SintesisRevalDiag />
            <DocumentosProcReval />
            <RevaluacionEspec />
            <EvaluacionApoyos />
        </>
    )
}