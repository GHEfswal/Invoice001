import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

export default function Header() {
  return (
    <>
      <section className="contentBox">
        <div className="contentBox__headerInfo">
          <div className="contentBox__headerInfo__logo">
            <img src={logo} alt="" />
          </div>
          <div className="contentBox__headerInfo__text">
            <p>
              <span className="headerInfoPlaceholder">
                The Car Doctors Ltd.
              </span>{" "}
              <span>547 High Street, London</span>
            </p>
            <p>
              <span className="headerInfoPlaceholder">Co. Reg. No.:</span>
              <span>12345678</span>&nbsp;&nbsp;&nbsp;
              <span className="headerInfoPlaceholder">VAT No.</span>
              <span>GB123456789</span>
            </p>
            <p>
              <span className="headerInfoPlaceholder">Email:</span>
              <span>contact@thecardoctors.co.uk</span>&nbsp;&nbsp;&nbsp;
              <span className="headerInfoPlaceholder">Phone:</span>
              <span>07831261234</span>
            </p>
            <p>
              <span className="headerInfoPlaceholder">Website:</span>{" "}
              <span>spathecardoctors.co.uk</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
