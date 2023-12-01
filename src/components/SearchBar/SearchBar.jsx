import React from "react";
import { useDispatch } from "react-redux";
import {
  getCompanies,
  searchByName,
} from "../../redux/companies/companiesOperations";
import css from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.currentTarget[0].value;
    if (searchTerm.trim() === "") {
      dispatch(getCompanies());
    } else {
      dispatch(searchByName(searchTerm));
    }
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSearchSubmit}>
        <input className={css.input} type="text" />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
