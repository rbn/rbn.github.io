const Home = () => {
  return (
    <main>
      {" "}
      <section className="blacklines figurine-box">
        <div id="box-figurine" className="box"></div>
      </section>
      <section className="title">
        <h1>The Box</h1>
      </section>
      <section id="boxes" className="blackout whitelines">
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
          <span>I manage my padding lorem20</span>
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
      <section className="blacklines">
        <div className="stack stack-figurine">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="title">
        <h2>The Stack</h2>
      </section>
      <section id="stacks" className="grayout whitelines">
        <div className="stack">
          <div className="box">
            <span>I am the stack</span>
            <span className="words">stacked element</span>
          </div>
          <div className="box">
            <span>
              I manage the space between the elements I contain in a nifty way (
              *+* )🦉
            </span>
            <span className="words">stacked element</span>
          </div>
          <div className="box">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Delectus corrupti ab
              rerum velit! Ducimus blanditiis asperiores, ratione, delectus
              veniam cumque at corrupti fugiat molestias perspiciatis ab vero.
              Velit repellendus veniam vitae repellat eveniet voluptates autem
              enim, accusantium officia eius sed eos reprehenderit quaerat ex?
              Excepturi explicabo fugiat iure natus dolore. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aperiam natus beatae iste
              nisi, dicta tempore adipisci, aut doloribus deserunt aliquam
              aspernatur illo! Adipisci laudantium voluptate eveniet asperiores
              fuga maiores totam, fugiat ullam corporis beatae sapiente dolore
              assumenda? Minus fugiat tenetur, doloremque suscipit repellat
              perferendis dolore, laudantium repudiandae non voluptatum sequi?
            </span>
            <span className="words">stacked element</span>
          </div>
          <div className="box">
            <img id="war" src="trooper.jpg" />
            <span className="words">stacked element</span>
          </div>
          <span className="words">stack</span>
        </div>
      </section>{" "}
      <section className="blacklines">
        <div>
          <hr />
        </div>
      </section>
      <section className="title">
        <h2>The Center</h2>
      </section>
      <section id="center" className="blackout">
        <div className="center">
          <div className="stack whitelines">
            <span>put a sidebar next to me later, ok?</span>
            <img src="velo.jpg" />
          </div>
        </div>
      </section>{" "}
      <section className="blacklines">
        <div></div>
      </section>
      <section className="title">
        <h2>The Cluster</h2>
      </section>
      <section id="center" className="grayout">
        <div></div>
      </section>
    </main>
  );
};

export default Home;
