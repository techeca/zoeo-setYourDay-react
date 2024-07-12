export const handleGenerateDocument = async (documento) => {
    try {
        const response = await fetch('http://localhost:3000/api/process-document', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({documento:documento})
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'modified-template.docx';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } else {
            console.error('Failed to download the document');
        }
    } catch (error) {
        console.error('Error generating document:', error);
    }
};

export const handleUpdateDocument = async (key, documento, texto) => {
    try {
        const response = await fetch('http://localhost:3000/api/update-document', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: key, documento: documento, texto: texto })
        });

        if (response.ok) {
            console.log('Document updated');
        } else {
            console.error('Failed to download the document');
        }
    } catch (error) {
        console.error('Error generating document:', error);
    }
};