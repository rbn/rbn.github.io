const Home = () => {
  return (
    <div id="page" className="sidebar">
      <header>
        <div>
          <p>
            This page uses certain design conventions to achieve this layout. It
            is meant to act as a demonstrable design patterns and practices
            playbook.
          </p>
          <h3>List of conventions</h3>
          <ul></ul>
        </div>
      </header>
      <main>
        <section id="box-figurine">
          <h2>The Box</h2>
          <div className="box"></div>
        </section>
        <section id="box-demo">
          <div className="box invert">
            <span>I am a box</span>
            <span className="labels">box</span>
          </div>
          <div className="box">
            <span className="align-self-center">if you remove one of me</span>
            <span className="labels">box</span>
          </div>
          <div className="box invert">
            <span className=" align-self-end">things happen.</span>
            <span className="labels">box</span>
          </div>
          <div className="box">
            <span>I manage my padding</span>
            <span className="labels">box</span>
          </div>
          <div className="box invert">
            <span className="align-self-center">not margins. or gaps.</span>
            <span className="labels">box</span>
          </div>
          <div className="box nopad">
            <img src="warbike.png" className="nopad" />
            <span className="labels">box</span>
          </div>
        </section>
        <section id="stack-figurine">
          <h2>The Stack</h2>
          <div className="stack">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section id="stack-demo">
          <div className="stack">
            <div className="box">
              <span>I am the stack</span>
              <span className="labels">stacked element</span>
            </div>
            <div className="box">
              <span>
                I manage the space between the elements I contain in a nifty way
                ( *+* )🦉
              </span>
              <span className="labels">stacked element</span>
            </div>
            <div className="box">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Delectus corrupti
                ab rerum velit! Ducimus blanditiis asperiores, ratione, delectus
                veniam cumque at corrupti fugiat molestias perspiciatis ab vero.
                Velit repellendus veniam vitae repellat eveniet voluptates autem
                enim, accusantium officia eius sed eos reprehenderit quaerat ex?
                Excepturi explicabo fugiat iure natus dolore. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Aperiam natus beatae iste
                nisi, dicta tempore adipisci, aut doloribus deserunt aliquam
                aspernatur illo! Adipisci laudantium voluptate eveniet
                asperiores fuga maiores totam, fugiat ullam corporis beatae
                sapiente dolore assumenda? Minus fugiat tenetur, doloremque
                suscipit repellat perferendis dolore, laudantium repudiandae non
                voluptatum sequi?
              </span>
              <span className="labels">stacked element</span>
            </div>
            <div className="box nopad">
              <img id="war" src="trooper.jpg" className="nopad" />
              <span className="labels">stacked element</span>
            </div>
            <span className="labels">stack</span>
          </div>
        </section>{" "}
        <section id="center-figurine">
          <h2>The Center</h2>
          <div>
            <hr />
          </div>
        </section>
        <section id="center-demo">
          <div className="center">
            <div className="stack invert">
              <span>
                i live in a div that lives in a stack, and that stack is
                centered. <strong>And yet,</strong> text is left-aligned.
              </span>
              <img src="velo.jpg" />
            </div>
          </div>
        </section>{" "}
        <section id="cluster-figurine">
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
        <section id="cluster-demo">
          <div className="cluster">
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
        <section id="sidebar-demo">
          <div className="sidebar">
            <div className="sidebar-side">
              <div className="cluster">
                <div>
                  <a href="#">i will stay</a>
                </div>
                <div>
                  <a href="#">on the side</a>
                </div>
                <div>
                  <a href="#">unless the content to the right</a>
                </div>
                <div>
                  <a href="#">is forced to scale</a>
                </div>
                <div>
                  <a href="#">to less than my width</a>
                </div>
              </div>
            </div>
            <div className="primary-content">
              <img src="yoda.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="grid-figurine">
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
        <section id="switcher-figurine">
          <h2>The Switcher</h2>
        </section>
        <section id="switcher-demo" className="grayout">
          <div className="switcher">
            <div className="switches">side</div>
            <div className="switches">feature</div>
            <div className="switches">side</div>
          </div>
        </section>
        <section id="frame-figurine">
          <div className="sidebar">
            <div className="sidebar-side">
              <h2>The Frame</h2>
            </div>
            <div className="primary-content">
              <img src="yoda.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="frame-demo">
          <div className="frame feature">
            <img src="yoda.jpg" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
