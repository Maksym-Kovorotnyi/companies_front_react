import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCompanies } from "../../redux/companies/companiesOperations";
import CompaniesList from "../../components/CompaniesList/CompaniesList";

function CompaniesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  return (
    <div>
      <CompaniesList />
    </div>
  );
}

export default CompaniesPage;
