import React from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/companies/companiesOperations";

function SearchBar() {
  const dispatch = useDispatch();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(e.currentTarget[0].value));
  };
  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
