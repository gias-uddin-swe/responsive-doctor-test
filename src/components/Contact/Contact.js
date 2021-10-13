import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="">
      <h1>Contact with us</h1>
      <div className="contact-form p-3">
        <div className="row  d-flex justify-content-center ">
          <div className="col-md-6 mt-5">
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your Name"
            />
            <br />
            <input
              className="input-field"
              type="Email"
              placeholder="Enter Your Email"
            />
            <br />
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your Phone"
            />
            <br />
            <input className="input-button" type="submit" value="Submit" />
          </div>
          <div className="col-md-6">
            <div className="contact-im">
              <img
                className="w-100"
                src="https://i.ibb.co/FVMcnDp/undraw-contact-us-15o2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
