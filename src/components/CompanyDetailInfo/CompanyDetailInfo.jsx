import React from "react";
import { useSelector } from "react-redux";
import CompanyDeleteBtn from "../CompanyDeleteBtn/CompanyDeleteBtn";
import CompanyUpdateBtn from "../CompanyUpdateBtn/CompanyUpdateBtn";
import css from "./CompanyDetailInfo.module.css";

function CompanyDetailInfo() {
  const {
    id,
    name,
    address,
    serviceOfActivity,
    numberOfEmployees,
    description,
    type,
  } = useSelector((state) => state.companies.companyDetail);
  return (
    <div className={css.container} id={id}>
      <h1 className={css.title}>Company: {name}</h1>
      <p className={css.text}>Adress: {address}</p>
      <p className={css.text}>Service of activity: {serviceOfActivity}</p>
      <p className={css.text}>Number of employees: {numberOfEmployees}</p>
      <p className={css.text}>Description: {description}</p>
      <p className={css.text}>Type: {type}</p>
      <CompanyDeleteBtn />
      <CompanyUpdateBtn />
    </div>
  );
}

export default CompanyDetailInfo;
