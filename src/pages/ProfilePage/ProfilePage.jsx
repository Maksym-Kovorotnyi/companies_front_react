import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/auth/authOperations";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import css from "./ProfilePage.module.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const { firstname, lastname, nickname, email, phone, description } =
    useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Your profile</h1>
      <p className={css.text}>
        First name: <span className={css.highlight}>{firstname}</span>
      </p>
      <p className={css.text}>
        Last name: <span className={css.highlight}>{lastname}</span>
      </p>
      <p className={css.text}>
        Nickname: <span className={css.highlight}>{nickname}</span>
      </p>
      <p className={css.text}>
        Email: <span className={css.highlight}>{email}</span>
      </p>
      <p className={css.text}>
        Phone number: <span className={css.highlight}>{phone}</span>
      </p>
      <p className={css.text}>
        Description: <span className={css.highlight}>{description}</span>
      </p>
      <LogoutBtn />
    </div>
  );
}

export default ProfilePage;
