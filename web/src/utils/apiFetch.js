const API_URL = import.meta.env.VITE_API_URL

const apiFetch = async (url, options = {}) => {
    let accessToken = localStorage.getItem('token');
    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
    };

    //console.log(API_URL);

    let response = await fetch(url, options);
    //console.log(accessToken);

    // Si el token expiró, intenta renovarlo
    if (response.status === 401) {
        const refreshResponse = await fetch(`${API_URL}/api/auth/token`, { method: 'POST', credentials: 'include' });
        if (refreshResponse.ok) {
            const { accessToken: newAccessToken } = await refreshResponse.json();
            localStorage.setItem('token', newAccessToken);

            // Reintentar la solicitud original
            options.headers.Authorization = `Bearer ${newAccessToken}`;
            response = await fetch(url, options);
        }
    }

    return response;
};


export default apiFetch