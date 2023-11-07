import { useState, useEffect } from "react";


const loacalCache = {};

export default function useBreedList(animal){
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('unloaded');

    useEffect( () => {
        if (!animal){
            setBreedList([]);
        } else if (loacalCache[animal]){
            setBreedList(loacalCache[animal])
        } else {
            requestBreedList();
        }

        async function requestBreedList(){
            setBreedList([]);
            setStatus('loading');
            
            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            loacalCache[animal] = json.breeds || []
            setBreedList(loacalCache[animal]);
            setStatus("Loaded");
        }
    }, [animal]); // this second list parameter is which triggeres the effect if changes
    return [breedList, status];
}