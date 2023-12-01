import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanies,
  updateCompany,
} from "../../redux/companies/companiesOperations";
import {
  toggleModal,
  updateListener,
} from "../../redux/companies/companiesSlice";

function CompanyUpdateForm() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.companies?.companyDetail);
  const [compName, setCompName] = useState(company?.name);
  const [compAddress, setCompAddress] = useState(company?.address);
  const [compServiceOfActivity, setCompServiceOfActivity] = useState(
    company?.serviceOfActivity
  );
  const [compNumberOfEmployees, setCompNumberOfEmployees] = useState(
    company?.numberOfEmployees
  );
  const [compDescription, setCompDescription] = useState(company?.description);
  const [compType, setCompType] = useState(company?.type);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.dir(e.currentTarget);
    const updatedCompany = {
      name: compName,
      address: compAddress,
      serviceOfActivity: compServiceOfActivity,
      numberOfEmployees: compNumberOfEmployees,
      description: compDescription,
      type: compType,
    };
    dispatch(updateCompany({ id: company.id, body: updatedCompany }));
    dispatch(toggleModal());
    dispatch(updateListener(false));
    dispatch(getCompanies());
  };

  const handleInputs = (e) => {
    switch (e.target.id) {
      case "name":
        setCompName(e.target.value);
        break;
      case "address":
        setCompAddress(e.target.value);
        break;
      case "serviceOfActivity":
        setCompServiceOfActivity(e.target.value);
        break;
      case "numberOfEmployees":
        setCompNumberOfEmployees(e.target.value);
        break;
      case "description":
        setCompDescription(e.target.value);
        break;
      case "type":
        setCompType(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={compName}
          onChange={handleInputs}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={compAddress}
          onChange={handleInputs}
        />
        <label htmlFor="serviceOfActivity">Service of activity:</label>
        <input
          type="text"
          id="serviceOfActivity"
          name="serviceOfActivity"
          value={compServiceOfActivity}
          onChange={handleInputs}
        />
        <label htmlFor="numberOfEmployees">Number Of employees:</label>
        <input
          type="number"
          id="numberOfEmployees"
          name="numberOfEmployees"
          value={compNumberOfEmployees}
          onChange={handleInputs}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={compDescription}
          onChange={handleInputs}
        />
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={compType}
          onChange={handleInputs}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CompanyUpdateForm;
