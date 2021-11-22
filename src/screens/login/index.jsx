import React from "react";
import SidebarLayout from "./sidebar-layout";
import LoginFormLayout from "./login-form-layout";

const LoginScreen = () => {
  return (
    <>
      <main>
        <div className="layout">
          <LoginFormLayout />
          <SidebarLayout />
        </div>
      </main>
    </>
  );
};

export default LoginScreen;
