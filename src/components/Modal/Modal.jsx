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
      <div className="overlay" onClick={handleModalClose}></div>
      <div className="modal">
        <button className="close-button" onClick={handleModalClose}>
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
