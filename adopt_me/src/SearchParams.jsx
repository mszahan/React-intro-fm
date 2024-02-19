import { useState, useContext, useDeferredValue, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import AdoptedPetContext from './AdoptedPetContext';
import fetchSearch from './fetchSearch';
import useBreedList from './useBreedList';
// eslint-disable-next-line import/no-unresolved
import Results from './Results';

const ANIMAL = ['birds', 'cat', 'dog', 'rabbit', 'retptile'];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(['search', requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const deferredPets = useDeferredValue(pets);
  const renderedPets = useMemo(() => <Results pets={deferredPets} />);

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col
        justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}

        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            className="search-input"
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            className="search-input"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {/* here in arrow funtion the parenthesis instead of curly braces
            .. works as the return it's called the implicit return
            .. if you use the curly braces you will have to type return */}
            {ANIMAL.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            disabled={breeds.length === 0}
            className="search-input grayed-out-disabled"
          >
            <option />

            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {' '}
                {breed}{' '}
              </option>
            ))}
          </select>
        </label>

        <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none bg-orange-500">
          Submit
        </button>
      </form>
      {/* <Results pets={pets} /> */}
      {renderedPets}
    </div>
  );
};

export default SearchParams;
