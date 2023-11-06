import { useState } from 'react';

const ANIMAL = ['birds', 'cat', 'dog', 'rabbit', 'retptile']

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  return (
    <div className="search-params">
      <form action="">
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
          onChange={e =>{
            setAnimal(e.target.value)
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


        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
