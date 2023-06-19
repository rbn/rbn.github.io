import logo from "../assets/logo.svg";

const Home = () => {
  return (
    <>
      <header>
        <div class="container">
          <div class="topNav">
            <div>
              <a href="#">
                <img src={logo} width="50"></img>
              </a>
              <nav>
                <ul>
                  <li>nav 1</li>
                  <li>nav 1</li>
                  <li>nav 1</li>
                  <li>nav 1</li>
                  <li>nav 1</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="container">Text sample</div>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
