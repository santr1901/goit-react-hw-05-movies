import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchName);
    setSearchName('');
  };

  const handleChangeName = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={searchName}
          onChange={handleChangeName}
          placeholder="input movie name"
        ></input>
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchForm;
