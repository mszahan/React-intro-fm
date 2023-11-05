import { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('');
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
