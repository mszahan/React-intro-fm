import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import Pet from './Pet';

const ANIMAL = ['birds', 'cat', 'dog', 'rabbit', 'retptile']

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // that empty array is preventing the repeatation of the effect

  async function requestPets(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breeds}`
    );
    const json = await res.json();
    setPets(json.pets)
  }

  const breeds = [];


  return (
    <div className="search-params">
      <form onSubmit={e =>{
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor='animal'>
          Animal
          <select 
          id='animal'
          value={animal}
          onChange={e => {
            setAnimal(e.target.value);
            setBreed('')
          }}>

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
          value={breed}
          onChange={e => setBreed(e.target.value)}
          disabled={breeds.length === 0}
          >
            <option/>

            {breeds.map(breed =>(
              <option key={breed}> {breed} </option>
            ))}

          </select>

        </label>


        <button>Submit</button>
      </form>

      {pets.map((pet) => (
        <Pet 
        name={pet.name}
        animal={pet.animal}
        breed={pet.breed}
        key={pet.id}/>
      ))}


    </div>
  );
};

export default SearchParams;
