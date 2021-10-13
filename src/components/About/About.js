import React from "react";
import "./About.css";
import aboutImage from "../../images/Banner&Background/kit.png";

const About = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img className="w-100" src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-right-section text-start p-4">
              <h6 className="mt-4">
                About US{" "}
                <span className="ms-3">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                    alt=""
                  />
                </span>
              </h6>
              <h1 className="mt-5">Medical Equipment & Kit</h1>
              <p>
                Pair large text with an image to give focus to your chosen
                product, collection, or blog post. Add details on availability,
                style, or even provide a review. Even if you can't afford to
                travel the world, you can take your children to the museum, zoo
                or local park. And don't be afraid to take them to grown-up
                spots. Eating out in a restaurant teaches children how to be
                quiet and polite and gives them the pleasure of knowing you
                trust them to behave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
