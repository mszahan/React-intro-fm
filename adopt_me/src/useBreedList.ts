// import { QueryStatus, useQuery } from '@tanstack/react-query';
// import fetchBreedList from './fetchBreedList';
// import { Animal } from './APIResponsesTypes';

import { useGetBreedsQuery } from './petApiService';

export default function useBreedList(animal: Animal) {
  // const results = useQuery(['breeds', animal], fetchBreedList);

  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], 'loaded'];
  }

  return [breeds ?? [], isLoading ? 'loading' : 'loaded'];

  // return [results?.data?.breeds ?? [], results.status] as [
  //   string[],
  //   QueryStatus,
  // ];
}

// import { useState, useEffect } from "react";

// const loacalCache = {};

// export default function useBreedList(animal){
//     const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState('unloaded');

//     useEffect( () => {
//         if (!animal){
//             setBreedList([]);
//         } else if (loacalCache[animal]){
//             setBreedList(loacalCache[animal])
//         } else {
//             requestBreedList();
//         }

//         async function requestBreedList(){
//             setBreedList([]);
//             setStatus('loading');

//             const res = await fetch(
//                 `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//             )
//             const json = await res.json();
//             loacalCache[animal] = json.breeds || []
//             setBreedList(loacalCache[animal]);
//             setStatus("Loaded");
//         }
//     }, [animal]); // this second list parameter is which triggeres the effect if changes
//     return [breedList, status];
// }
