import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCompany,
  getCompanies,
} from "../../redux/companies/companiesOperations";
import { toggleModal } from "../../redux/companies/companiesSlice";
import css from "./CompanyDeleteBtn.module.css";

function CompanyDeleteBtn() {
  const dispatch = useDispatch();
  const handleDeletebtn = (e) => {
    dispatch(deleteCompany(e.currentTarget.parentElement.id));
    dispatch(toggleModal());
    dispatch(getCompanies());
  };

  return (
    <>
      <button className={css.btn} type="button" onClick={handleDeletebtn}>
        Delete
      </button>
    </>
  );
}

export default CompanyDeleteBtn;
