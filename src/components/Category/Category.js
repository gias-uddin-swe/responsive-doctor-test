import React, { useEffect, useState } from "react";
import "./Category.css";
const Category = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/faakedata.json"
    )
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <div className="Category p-5 container">
      <div className="shop-category">
        <div className="top-part">
          <h6 className="mt-4">
            <span className="me-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
            OUR PRODUCTS{" "}
            <span className="ms-3">
              <img
                src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
                alt=""
              />
            </span>
          </h6>
          <h1 className="mt-5">Shop By Category</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa
          </p>
          <div className="button-continer">
            <button className="btn-0">New Arrivals</button>
            <button className="btn-1">Featured</button>
            <button className="btn-1">Best Sellers</button>
          </div>
        </div>
      </div>
      <div className="row">
        {products.map((pd) => (
          <div key={pd.id} className="col-lg-3 col-md-6 col-sm-12">
            <div className="product-cart p-2">
              <div className="product-image p-2">
                <img className="w-100" src={pd.image} alt="" />
                <p className="mt-3">
                  <b>{pd.name}</b>
                </p>
                <h5 className="text-info">{pd.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
