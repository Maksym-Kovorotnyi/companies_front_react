import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../redux/companies/companiesOperations";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Modal from "../../components/Modal/Modal";
import AddCompanyBtn from "../../components/AddCompanyBtn/AddCompanyBtn";

function CompaniesPage() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.companies.isModal);
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <div>
      <AddCompanyBtn />
      <CompaniesList />
      {isModalOpen ? <Modal /> : ""}
    </div>
  );
}

export default CompaniesPage;
