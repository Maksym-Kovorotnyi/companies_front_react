import React from "react";
import { logout } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import css from "./LogoutBtn.module.css";

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Log out
      </button>
    </>
  );
}

export default LogoutBtn;
