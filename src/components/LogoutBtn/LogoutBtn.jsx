import React from "react";
import { logout } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default LogoutBtn;
