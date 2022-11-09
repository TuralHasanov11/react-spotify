import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function submitForm(e) {
    e.preventDefault();
    navigate(`/search/${search}`);
  }

  return (
    <form onSubmit={submitForm} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
