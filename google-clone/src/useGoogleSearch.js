import {useState, useEffect} from 'react';
import API_KEY from './keys';
const CONTEXT_KEY = '25c33cf48ab940053';
const  useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(()=> {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result =>{
                setData(result)
            })
        }
        fetchData();
    }, [term]);
    return {data}
};
// 2:18:41
export default useGoogleSearch
