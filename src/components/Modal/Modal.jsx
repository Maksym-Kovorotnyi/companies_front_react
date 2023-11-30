import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/companies/companiesSlice";
import CreateCompanyForm from "../CreateCompanyForm/CreateCompanyForm";

const Modal = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <div className="overlay" onClick={handleModalClose}></div>
      <div className="modal">
        <button className="close-button" onClick={handleModalClose}>
          Close
        </button>
        <CreateCompanyForm />
      </div>
    </div>
  );
};

export default Modal;
