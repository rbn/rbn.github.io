import logo from "../assets/logo.svg";
import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";

const Home = () => {
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
        <div className="container">
          <stack-l recursive space="2rem">
            <h1>Hello, I'm Rich.</h1>
            <p>I make things</p>
            <p>add an error page</p>
            <Outlet />
          </stack-l>
        </div>
      </main>
      <footer className="grayout">
        <div className="container">
          <h2>footer content</h2>
          <box-l borderWidth="var(--border-thin)">This is a box</box-l>
        </div>
      </footer>
    </center-l>
  );
};

export default Home;
