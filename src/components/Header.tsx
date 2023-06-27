import React from "react";
import TopNav from "../components/TopNav";

const Header = () => {
  return (
    <div className="container">
      <cluster-l justify="space-between" align="center" space="var(--s1)">
        <a href="/">
          <img src="/logo.svg" alt="logo" width="50" height="50" />
        </a>
        <TopNav />
      </cluster-l>
    </div>
  );
};

export default Header;
