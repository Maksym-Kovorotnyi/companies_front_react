import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCompany,
  getCompanies,
} from "../../redux/companies/companiesOperations";
import { toggleModal } from "../../redux/companies/companiesSlice";

function CompanyDeleteBtn() {
  const dispatch = useDispatch();
  const handleDeletebtn = (e) => {
    dispatch(deleteCompany(e.currentTarget.parentElement.id));
    dispatch(toggleModal());
    dispatch(getCompanies());
  };

  return (
    <>
      <button type="button" onClick={handleDeletebtn}>
        Delete
      </button>
    </>
  );
}

export default CompanyDeleteBtn;
