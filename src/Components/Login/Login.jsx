import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginLostPassword />} />
        <Route path="resetar" element={<LoginResetPassword />} />
      </Routes>
    </section>
  );
};

export default Login;
