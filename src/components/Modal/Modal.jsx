import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCompanyDetail,
  toggleModal,
} from "../../redux/companies/companiesSlice";
import CreateCompanyForm from "../CreateCompanyForm/CreateCompanyForm";
import CompanyDetailInfo from "../CompanyDetailInfo/CompanyDetailInfo";

const Modal = () => {
  const dispatch = useDispatch();
  const modalCheck = useSelector((state) => state.companies.companyDetail);

  const handleModalClose = () => {
    dispatch(toggleModal());
    dispatch(toggleCompanyDetail());
  };

  return (
    <div>
      <div className="overlay" onClick={handleModalClose}></div>
      <div className="modal">
        <button className="close-button" onClick={handleModalClose}>
          Close
        </button>
        {modalCheck ? <CompanyDetailInfo /> : <CreateCompanyForm />}
      </div>
    </div>
  );
};

export default Modal;
