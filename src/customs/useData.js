import { useEffect} from 'react';
import { useDataDispatch, useDatabase } from './DatabaseContext';

function useData(key, url) {
    console.log('useData');
    const db = useDatabase();
    const dispatch = useDataDispatch();
    let data = db.find(element => element.key === key);
    useEffect(() => {
        let ignore = false;
        if(!data){ 
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    dispatch({type:'add', data:json.articles, key:key})
                }
            }).catch(error => console.log(error))
        }
        return () => {
            ignore = true;
        }
    }, [url, data, key, dispatch])

    return data? data.data : undefined; 
}

export default useData;