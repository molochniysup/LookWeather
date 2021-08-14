import React, {useCallback, useState} from 'react';
import {createReq} from '../../Utils/Request';
import './header.css';

const Header = ({search}) => {
  const [city, setCity] = useState('');

  const changeNameCity = useCallback((e) => {
    setCity(e.target.value);
  }, [setCity]);

  return (
    <header className="header">
      <div className="headerContainer">
        <div className="searchContainer">
          <input
            className="input"
            type="text"
            placeholder='Search city'
            value={city}
            onChange={changeNameCity}
          />
          <button
            className="button"
            onClick={() => createReq(search(city))}
            disabled={!city}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;