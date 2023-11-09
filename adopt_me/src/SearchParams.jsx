import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";

import fetchSearch from "./fetchSearch";
import useBreedList from './useBreedList';
// eslint-disable-next-line import/no-unresolved
import Results from './Results';

const ANIMAL = ['birds', 'cat', 'dog', 'rabbit', 'retptile']

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal)

  const results = useQuery(['search', requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];



  return (
    <div className="search-params">
      <form onSubmit={e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestParams(obj)
      }}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
        </label>

        <label htmlFor='animal'>
          Animal
          <select 
          id='animal'
          name='animal'
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
          }}
         >

            <option/>
            {/* here in arrow funtion the parenthesis instead of curly braces
            .. works as the return it's called the implicit return
            .. if you use the curly braces you will have to type return */}
            {ANIMAL.map(animal => (
              <option key={animal}>{animal}</option>
            ))}

          </select>
        </label>

        <label htmlFor='breed'>
          Breed
          <select id='breed'
          name='breed'
          disabled={breeds.length === 0}
          >
            <option/>

            {breeds.map(breed =>(
              <option key={breed} value={breed}> {breed} </option>
            ))}

          </select>

        </label>


        <button>Submit</button>
      </form>
      <Results pets={pets}/>


    </div>
  );
};

export default SearchParams;
