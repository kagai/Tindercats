import React , {useState,useEffect,createContext} from 'react';
import api from '../services/api';



export const CatsContext = createContext();

export const CatsProvider = ({children}) => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        async function loadCats() {
            const response = await api.get('/images/?limit=100&has_breeds=1&page=0&order=DESC', {
                headers: {'x-api-key':process.env.REACT_APP_KEY}
              });
              setCats(response.data);
        }
        loadCats();
    }, []);

    return ( 
        <CatsContext.Provider value = {[cats,setCats]}>
            {children}
        </CatsContext.Provider>
     );
};
 
