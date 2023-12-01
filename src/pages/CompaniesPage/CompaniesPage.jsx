import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../redux/companies/companiesOperations";
import CompaniesList from "../../components/CompaniesList/CompaniesList";
import Modal from "../../components/Modal/Modal";
import AddCompanyBtn from "../../components/AddCompanyBtn/AddCompanyBtn";
import SearchBar from "../../components/SearchBar/SearchBar";
import { updateListener } from "../../redux/companies/companiesSlice";
import css from "./CompaniesPage.module.css";

function CompaniesPage() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.companies.isModal);
  const companies = useSelector((state) => state.companies.companies);
  useEffect(() => {
    dispatch(getCompanies());
    dispatch(updateListener(false));
  }, [dispatch]);
  return (
    <div className={css.container}>
      {!companies ? "" : <SearchBar />}
      <AddCompanyBtn />
      <CompaniesList />
      {isModalOpen ? <Modal /> : ""}
    </div>
  );
}

export default CompaniesPage;
