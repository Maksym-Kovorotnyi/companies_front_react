import React from "react";
import { useSelector } from "react-redux";
import Detailbtn from "../DetailBtn/Detailbtn";
import css from "./CompaniesItem.module.css";

function CompaniesItem() {
  const companies = useSelector((state) => state.companies.companies);
  return (
    <>
      {companies?.map(({ id, name, description, type }) => {
        return (
          <li className={css.item} key={id} id={id}>
            <h2 className={css.title}>Company name: {name}</h2>
            <p className={css.text}>Description: {description}</p>
            <Detailbtn />
          </li>
        );
      })}
    </>
  );
}

export default CompaniesItem;
