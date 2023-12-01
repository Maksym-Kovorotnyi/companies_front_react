import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCompanyDetail,
  toggleModal,
  updateListener,
} from "../../redux/companies/companiesSlice";
import CreateCompanyForm from "../CreateCompanyForm/CreateCompanyForm";
import CompanyDetailInfo from "../CompanyDetailInfo/CompanyDetailInfo";
import CompanyUpdateForm from "../CompanyUpdateForm/CompanyUpdateForm";
import css from "./Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modalCheck = useSelector((state) => state.companies.companyDetail);
  const isUpdating = useSelector((state) => state.companies.isUpdating);

  const handleModalClose = () => {
    dispatch(toggleModal());
    dispatch(toggleCompanyDetail());
    dispatch(updateListener(false));
  };

  return (
    <div>
      <div className={css.overlay} onClick={handleModalClose}></div>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={handleModalClose}>
          Close
        </button>
        {isUpdating ? (
          <CompanyUpdateForm />
        ) : modalCheck ? (
          <CompanyDetailInfo />
        ) : (
          <CreateCompanyForm />
        )}
      </div>
    </div>
  );
};

export default Modal;
