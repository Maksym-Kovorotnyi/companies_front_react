import React from "react";
import { useSelector } from "react-redux";
import Detailbtn from "../DetailBtn/Detailbtn";

function CompaniesItem() {
  const companies = useSelector((state) => state.companies.companies);
  return (
    <>
      {companies?.map(({ id, name, description, type }) => {
        return (
          <li key={id} id={id}>
            <h2>Company name: {name}</h2>
            <p>Description: {description}</p>
            <Detailbtn />
          </li>
        );
      })}
    </>
  );
}

export default CompaniesItem;
