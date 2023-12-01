import React from "react";
import { useDispatch } from "react-redux";
import { companyDetail } from "../../redux/companies/companiesOperations";
import { toggleModal } from "../../redux/companies/companiesSlice";
import css from "./Detailbtn.module.css";

function Detailbtn() {
  const dispatch = useDispatch();

  const handleDetail = (e) => {
    dispatch(companyDetail(e.currentTarget.parentElement.id));
    dispatch(toggleModal());
  };

  return (
    <>
      <button className={css.btn} type="button" onClick={handleDetail}>
        More information
      </button>
    </>
  );
}

export default Detailbtn;
