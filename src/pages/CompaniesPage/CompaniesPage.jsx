import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../redux/companies/companiesOperations";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Modal from "../../components/Modal/Modal";
import AddCompanyBtn from "../../components/AddCompanyBtn/AddCompanyBtn";
import SearchBar from "../../components/SearchBar/SearchBar";

function CompaniesPage() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.companies.isModal);
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <div>
      <SearchBar />
      <AddCompanyBtn />
      <CompaniesList />
      {isModalOpen ? <Modal /> : ""}
    </div>
  );
}

export default CompaniesPage;
