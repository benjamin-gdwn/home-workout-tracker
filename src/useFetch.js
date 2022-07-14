import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
    // store the state ready to use
    const [data, setData] = useState(null);
    // store state of loading from db.json
    const [isPending, setIsPending] = useState(true);
    // store the errors
    const [error, setError] = useState(null);
    // -----------------------------------------
    //     Catching states and errors on 
    //         request for data
    // -----------------------------------------
    // fetch data from the db.json file
    useEffect(() => {
        // create an abort controller
        const abortConst = new AbortController();
        // timeout whilst the data loads
    setTimeout(() => {
        // 
        fetch(url, {signal: abortConst.signal})
        .then(res => {
            // if the response is not ok then log the message
            if(!res.ok){
                throw Error('Could not fetch workouts');
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        // catches network errors and sets error state
        .catch((err) => {
            // if its an abort error
            if(err.name === 'AbortError') {
                console.log('Fetch Aborted')
            } else {
                setIsPending(false);
                setError(err.message);
            }
            
        })
    })
    return () => abortConst.abort();

    }, [url]);

    return { data, isPending, error};

}

export default useFetch;