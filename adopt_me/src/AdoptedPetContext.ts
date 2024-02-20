import { createContext } from 'react';
import { Pet } from './APIResponsesTypes';

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  // if you don't provide this you will have to pass null value
  {
    id: 1337,
    name: 'Fido',
    animal: 'dog',
    description: 'lorem',
    breed: 'beagle',
    images: [],
    city: 'Seattle',
    state: 'WA',
  },
  () => {},
]);

export default AdoptedPetContext;
