const Home = () => {
  return (
    <main>
      <section>
        <h1>The Box</h1>
      </section>
      <section className="blackout whitelines">
        <div className="box">
          <span>I am a box</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <span>if you remove one of me</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <span>things happen.</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <span>I manage my padding</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <span>don't ask me to manage margins or spacing</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <img src="warbike.png" />
          <span className="words">box</span>
        </div>
      </section>
      <section className="grayout whitelines">
        <div>
          <hr />
        </div>
      </section>
      <section className="blackout whitelines">
        <div>something here</div>
      </section>
    </main>
  );
};

export default Home;
