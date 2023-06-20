import React from "react";
import presentationImage from "../../assets/images/presentation.png";
import Header from "../../components/header";
import "../../styles/home.scss";

const HomeScreen = () => (
  <>
    <Header />
    <section className="section is-medium home">
      <div className="columns is-variable is-3-desktop is-1-mobile">
        <div className=" column is-offset-1  ">
          <p className="title is-1 is-spaced is-size-4-mobile">
            Create notes easily and access when you wants on the cloud
          </p>

          <p className="subtitle is-size-6-mobile">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
            <br />
            <br />
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print.
          </p>
          <a href="/register">
            <button className="button is-large is-responsive is-outlined is-inverted">
              Register for free now!
            </button>
          </a>
        </div>
        <div className="column ">
          <figure className="image is-5by4">
            <img src={presentationImage} />
          </figure>
        </div>
      </div>
    </section>
  </>
);

export default HomeScreen;
