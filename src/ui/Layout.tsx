import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav";

const Layout = () => {
  return (
    <center-l>
      <header>
        <div className="container">
          <cluster-l justify="space-between" align="center" space="var(--s1)">
            <a href="/">
              <img
                src="src/assets/logo.svg"
                alt="logo"
                width="50"
                height="50"
              />
            </a>
            <TopNav />
          </cluster-l>
        </div>
      </header>
      <main className="blackout padding-throughout">
        <Outlet />
      </main>
      <footer className="grayout">
        <div className="container">
          <box-l borderWidth="0"></box-l>
        </div>
      </footer>
    </center-l>
  );
};

export default Layout;
