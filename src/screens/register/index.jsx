import React from "react";
import "./style.css";
import RegisterLayout from "./register-layout";
import SidebarLayout from "./sidebar-layout";

const RegisterScreen = () => {
  return (
    <>
      <main>
        <div className="layout">
          <RegisterLayout />
          <SidebarLayout />
        </div>
      </main>
    </>
  );
};

export default RegisterScreen;
