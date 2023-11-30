import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/companies/companiesSlice";

function AddCompanyBtn() {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      <button type="button" onClick={handleModalClose}>
        Add new company
      </button>
    </>
  );
}

export default AddCompanyBtn;
