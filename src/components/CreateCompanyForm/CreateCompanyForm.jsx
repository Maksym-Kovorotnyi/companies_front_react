import React from "react";
import { useDispatch } from "react-redux";
import { createCompany } from "../../redux/companies/companiesOperations";

function CreateCompanyForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      name: e.currentTarget.elements.name.value,
      address: e.currentTarget.elements.address.value,
      serviceOfActivity: e.currentTarget.elements.serviceOfActivity.value,
      numberOfEmployees: e.currentTarget.elements.numberOfEmployees.value,
      description: e.currentTarget.elements.description.value,
      type: e.currentTarget.elements.type.value,
    };
    dispatch(createCompany(newCompany));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="serviceOfActivity">Service of activity:</label>
        <input
          type="text"
          id="serviceOfActivity"
          name="serviceOfActivity"
          required
        />
        <label htmlFor="numberOfEmployees">Number Of employees:</label>
        <input
          type="number"
          id="numberOfEmployees"
          name="numberOfEmployees"
          required
        />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" required />
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCompanyForm;
