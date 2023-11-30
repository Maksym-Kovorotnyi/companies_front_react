import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/authOperations";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";

function ProfilePage() {
  const dispatch = useDispatch();
  const { firstname, lastname, nickname, email, phone, description } =
    useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Your profile</h1>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Nickname: {nickname}</p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
      <p>Description: {description}</p>
      <LogoutBtn />
    </div>
  );
}

export default ProfilePage;
