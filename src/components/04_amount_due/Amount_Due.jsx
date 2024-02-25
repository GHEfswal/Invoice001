import React from "react";
import "./Amount_Due.scss";

export default function Amount_Due() {
  return (
    <>
      <section className="totalAll">
        <div className="totalBox">
          <div className="totalBox__subtotalBox">
            <p>
              <span className="subtotalPlaceholder">Subtotal without VAT:</span>
              <span className="subtotalData">280.00</span>
            </p>
            <p>
              <span className="vatPlaceholder">VAT 20% of 280.00:</span>
              <span className="vatData">56.00</span>
            </p>
            <p className="totalGBP">
              <span className="totalPlaceholder">Total GBP:</span>
              <span className="totalData">336.00</span>
            </p>
          </div>

          <div className="totalBox__amountPaidBox">
            <p>
              <span className="amountPaidPlaceholder">Amount Paid</span>
              <span className="amountPaidData">0.00</span>
            </p>
            <p className="amountDue">
              <span className="amountDuePlaceholder">Amount Due (GBP):</span>
              <span className="amountDueData">336.00</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
