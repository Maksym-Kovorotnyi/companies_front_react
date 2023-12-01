import React from "react";
import { useDispatch } from "react-redux";
import { updateListener } from "../../redux/companies/companiesSlice";
import css from "./CompanyUpdateBtn.module.css";

function CompanyUpdateBtn() {
  const dispatch = useDispatch();
  const handleUpdateForm = () => {
    dispatch(updateListener(true));
  };
  return (
    <>
      <button className={css.btn} type="button" onClick={handleUpdateForm}>
        Change company information
      </button>
    </>
  );
}

export default CompanyUpdateBtn;
