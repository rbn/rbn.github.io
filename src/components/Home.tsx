import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <stack-l recursive space="2rem">
        <box-l borderWidth="var(--border-thin)">
          <cluster-l>
            <h1>Hello, I'm Rich.</h1>
            <box-l>
              <div>I make things</div>
            </box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
            <box-l></box-l>
          </cluster-l>
        </box-l>
      </stack-l>
    </div>
  );
};

export default Home;
