import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/CategoryData.json"
    )
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return (
    <div className="container w-100 m-auto p-5">
      <div className="prevention d-flex justify-content-center p-5">
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
        <h6 className="ms-3 me-3">PREVENTION</h6>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
      </div>
      <h1 className="Prevent-title">How to Prevent Yourself</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />
        ligula eget dolor. Aenean massa.
      </p>

      <div className="row">
        {fakeData.map((pd) => (
          <div key={pd.id} className="col-md-6 col-lg-4 col-sm-12">
            <div className="cart p-3 m-2 border border">
              <div className="service img">
                <img src={pd.image} alt="category" />
              </div>
              <h6 className="mt-4">{pd.name}</h6>
              <p className="mt-2">{pd.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
