import React from "react";
import { useDispatch } from "react-redux";
import { createCompany } from "../../redux/companies/companiesOperations";
import { toggleModal } from "../../redux/companies/companiesSlice";
import css from "./CreateCompanyForm.module.css";

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
    dispatch(toggleModal());
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          className={css.input}
          type="text"
          id="name"
          name="name"
          required
        />
        <label className={css.label} htmlFor="address">
          Address:
        </label>
        <input
          className={css.input}
          type="text"
          id="address"
          name="address"
          required
        />
        <label className={css.label} htmlFor="serviceOfActivity">
          Service of activity:
        </label>
        <input
          className={css.input}
          type="text"
          id="serviceOfActivity"
          name="serviceOfActivity"
          required
        />
        <label className={css.label} htmlFor="numberOfEmployees">
          Number Of employees:
        </label>
        <input
          className={css.input}
          type="number"
          id="numberOfEmployees"
          name="numberOfEmployees"
          required
        />
        <label className={css.label} htmlFor="description">
          Description:
        </label>
        <input
          className={css.input}
          type="text"
          id="description"
          name="description"
          required
        />
        <label className={css.label} htmlFor="type">
          Type:
        </label>
        <input
          className={css.input}
          type="text"
          id="type"
          name="type"
          required
        />
        <button className={css.btn} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateCompanyForm;
