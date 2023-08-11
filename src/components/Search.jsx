import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { setSearchValue, clearSearchValue } from '../../src/redux/slices/searchSlice';

const Search = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  return (
    <>
      <div className="search">
      <svg className='search__icon' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/></g></svg>

        <input className="search__input" placeholder="Поиск.." 
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        value={searchValue}
        />
      </div>
    </>
  );
};

export default Search;
