import { useState, useEffect }  from 'react';

import api from '../data/api';

export default function(path) {
    const [response, setResponse] = useState({ isLoading: true });

    useEffect(() => {
        api.fetch(path, 1000)
            .then(data => {
                setResponse({ data, isLoading: false });
            });
    }, []);

    return response;
}