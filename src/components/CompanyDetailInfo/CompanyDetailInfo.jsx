import React from "react";
import { useSelector } from "react-redux";
import CompanyDeleteBtn from "../CompanyDeleteBtn/CompanyDeleteBtn";

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
    <div id={id}>
      <h1>Company: {name}</h1>
      <p>Adress: {address}</p>
      <p>Service of activity: {serviceOfActivity}</p>
      <p>Number of employees: {numberOfEmployees}</p>
      <p>Description: {description}</p>
      <p>Type: {type}</p>
      <CompanyDeleteBtn />
    </div>
  );
}

export default CompanyDetailInfo;
