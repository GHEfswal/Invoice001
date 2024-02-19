import React from "react";
import "./Client_Info.scss";

export default function Client_Info() {
  return (
    <>
      <section className="invoiceTitleFlexbox">
        <div className="invoiceTitleFlexbox__billToJonSFlexbox">
          <div className="invoiceTitleFlexbox__billToJonSFlexbox__billTo">
            <p>Bill To:</p>
          </div>
          <div className="invoiceTitleFlexbox__billToJonSFlexbox__jonSDetails">
            <p>Jon Smith</p>
            <p>123 Picadilly, London +447812345678</p>
            <p>United Kingdom</p>
          </div>
        </div>

        <div className="invoiceIDBox">
          <p className="invoice">
            <span>Invoice:</span>
            <span>2021-009</span>
          </p>
          <p className="invoiceDate">
            <span>Invoice Date:</span>
            <span>19/05/21</span>
          </p>
          <p className="dueDate">
            <span>Due Date:</span>
            <span>02/06/21</span>
          </p>
        </div>
      </section>
    </>
  );
}
