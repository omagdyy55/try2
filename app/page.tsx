"use client";

import LoginRedirect from "./login/redirect";
import LoginPage from "./login/page";

const Home = () => {
  return (
    <>
      <LoginRedirect />
      <LoginPage />
    </>
  );
};

export default Home;
