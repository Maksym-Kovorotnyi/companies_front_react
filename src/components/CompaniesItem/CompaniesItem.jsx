import React from "react";
import { useSelector } from "react-redux";

function CompaniesItem() {
  const companies = useSelector((state) => state.companies.companies);
  return (
    <>
      {companies?.map(
        ({
          id,
          name,
          address,
          serviceOfActivity,
          numberOfEmployees,
          description,
          type,
        }) => {
          return (
            <li key={id} id={id}>
              <p>Company name: {name}</p>
              <p>Adress: {address}</p>
              <p>Service: {serviceOfActivity}</p>
              <p>Number of employees: {numberOfEmployees}</p>
              <p>Description: {description}</p>
              <p>Type: {type}</p>
            </li>
          );
        }
      )}
    </>
  );
}

export default CompaniesItem;
