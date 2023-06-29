const Home = () => {
  return (
    <main>
      <section id="box-figurine" className="blacklines">
        <h2>The Box</h2>
        <div className="box"></div>
      </section>
      <section id="box-demo" className="blackout">
        <div className="box invert">
          <span>I am a box</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <span>if you remove one of me</span>
          <span className="words">box</span>
        </div>
        <div className="box invert">
          <span>things happen.</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <span>I manage my padding</span>
          <span className="words">box</span>
        </div>
        <div className="box invert">
          <span>don't ask me to manage margins or spacing</span>
          <span className="words">box</span>
        </div>
        <div className="box">
          <img src="warbike.png" />
          <span className="words">box</span>
        </div>
      </section>
      <section id="stack-figurine" className="blacklines">
        <h2>The Stack</h2>
        <div className="stack">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section id="stack-demo" className="grayout">
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
      <section id="center-figurine" className="blacklines">
        <h2>The Center</h2>
        <div>
          <hr />
        </div>
      </section>
      <section id="center-demo" className="blackout">
        <div className="center">
          <div className="stack whitelines">
            <span>put a sidebar next to me later, ok?</span>
            <img src="velo.jpg" />
          </div>
        </div>
      </section>{" "}
      <section id="cluster-figurine" className="blacklines">
        <h2>The Cluster</h2>
        <div className="cluster">
          <span>x</span>
          <span>xxx</span>
          <span>xx</span>
          <span>xxxx</span>
          <span>xx</span>
          <span>xxxxxxxxxx</span>
          <span>xx</span>
        </div>
      </section>
      <section id="cluster" className="grayout">
        <div id="cluster-demo" className="cluster">
          <img src="trooper.jpg" alt="" />
          <div className="cluster">
            <div>
              <a href="#">we stay away</a>
            </div>
            <div>
              <a href="#">from the image</a>
            </div>
            <div>
              <a href="#">but cluster</a>
            </div>
            <div>
              <a href="#">together</a>
            </div>
          </div>
        </div>
      </section>
      <section id="sidebar-figurine">
        <div className="sidebar-container">
          <div className="box">
            <h2>The Sidebar </h2>
            <div>(return to fix figurine)</div>
          </div>
          <div className="sidebar-container">
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </section>
      <section id="sidebar-demo" className="blackout">
        <div className="sidebar-container">
          <div className="sidebar">
            <div className="cluster">
              <div>
                <a href="#">birds of</a>
              </div>
              <div>
                <a href="#">a feather</a>
              </div>
              <div>
                <a href="#">flock</a>
              </div>
              <div>
                <a href="#">together</a>
              </div>
            </div>
          </div>
          <div className="primary-content">
            <img src="yoda.jpg" alt="" />
          </div>
        </div>
      </section>
      <section id="grid-figurine" className="blacklines">
        <h2>The Grid</h2>
        <div className="grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section id="grid-demo" className="grayout">
        <div>another to do from this section - learn Resize Observer</div>
        <div className="grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section id="switcher-figurine"></section>
      <section id="switcher-demo">
        <div>
          <em>Next up:</em> switcher
          <ul>
            <li>switcher</li>
            <li>resize observer</li>
            <li>reel</li>
            <li>imposter (is it like my labels??)</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
