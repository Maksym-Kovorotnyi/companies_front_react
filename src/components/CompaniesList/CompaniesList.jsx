import React from "react";
import CompaniesItem from "../CompaniesItem/CompaniesItem";
import css from "./CompaniesList.module.css";

function CompaniesList() {
  return (
    <>
      <ul className={css.list}>
        <CompaniesItem />
      </ul>
    </>
  );
}

export default CompaniesList;
