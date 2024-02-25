import React from "react";
import "./Services.scss";

export default function Services() {
  return (
    <>
      <section className="titleAll">
        <div className="bothBoxes">
          <div className="bothBoxes__descriptionBox">
            <p>Description</p>
          </div>

          <div className="bothBoxes__quantityAndValueBox">
            <p>Quantity</p>
            <p>Unit</p>
            <p>Price</p>
            <p>VAT</p>
            <p>Amount</p>
          </div>
        </div>

        <div className="servicesDoneAll">
          <div className="contentBoxes">
            <div className="contentBoxes__contentDesc">
              <p className="item01">Dent Repair</p>
              <p className="item01Desc">6-inch dent above back left tyre</p>
            </div>

            <div className="contentBoxes__contentQAndV01">
              <p>1</p>
              <p>each</p>
              <p>200.00</p>
              <p>20%</p>
              <p>200.00</p>
            </div>
          </div>

          <div className="contentBoxes">
            <div className="contentBoxes__contentDesc">
              <p className="item01">New Tyre</p>
              <p className="item01Desc">Standard Multi-Directional</p>
            </div>

            <div className="contentBoxes__contentQAndV01">
              <p>1</p>
              <p>each</p>
              <p>60.00</p>
              <p>20%</p>
              <p>60.00</p>
            </div>
          </div>

          <div className="contentBoxes">
            <div className="contentBoxes__contentDesc">
              <p className="item01">Tyre Replacement</p>
              <p className="item01Desc">
                Black left-tyre - Standard Multi-Directional
              </p>
            </div>

            <div className="contentBoxes__contentQAndV01">
              <p>1</p>
              <p>each</p>
              <p>20.00</p>
              <p>20%</p>
              <p>20.00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
