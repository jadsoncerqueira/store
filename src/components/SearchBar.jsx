import React, { useContext } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import { productContext } from '../context/ProductProvider';

function Categories() {
  const {
    query, setQuery, setSelectedCategory, setPerformSearch,
  } = useContext(productContext);

  function search(event) {
    event.preventDefault();
    setSelectedCategory('');
    setPerformSearch(true);
  }

  return (
    <form className="flex gap-m flexi">
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={query}
          placeholder="buscar por..."
          onChange={({ target }) => setQuery(target.value)}
        />
      </label>

      <button
        type="submit"
        onClick={search}
      >
        <div className="flex ai-c gap-s jc-c ">
          Pesquisar
          <BiSearchAlt />
        </div>
      </button>
    </form>
  );
}

export default Categories;
