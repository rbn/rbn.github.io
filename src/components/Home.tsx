const Home = () => {
  return (
    <>
      <div className="container">
        <stack-l recursive space="2rem">
          <box-l borderWidth="var(--border-thin)">
            <cluster-l>
              <h1>Hello, I'm Rich.</h1>
              <box-l data-drop-shadow>I make things</box-l>
              <button>button</button>
            </cluster-l>
          </box-l>
        </stack-l>
        <grid-l min="125px" space="3rem">
          <box-l data-drop-shadow>1</box-l>
          <box-l data-lime>2</box-l>
          <box-l data-drop-shadow>3</box-l>
          <box-l data-lime>4</box-l>
          {/* <box-l data-drop-shadow>5</box-l>
          <box-l data-lime>6</box-l>
          <box-l data-drop-shadow>7</box-l>
          <box-l data-lime>8</box-l>
          <box-l data-drop-shadow>9</box-l>
          <box-l data-lime>10</box-l>
          <box-l data-drop-shadow>11</box-l>
          <box-l data-lime>12</box-l> */}
        </grid-l>
      </div>
      <div className="container whitelines grayout">
        <div className="center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            harum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
