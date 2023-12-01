import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/companies/companiesSlice";
import css from "./AddCompanyBtn.module.css";

function AddCompanyBtn() {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <button className={css.btn} type="button" onClick={handleModalClose}>
        Add new company
      </button>
    </>
  );
}

export default AddCompanyBtn;
