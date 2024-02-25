import React from "react";
import "./Footer.scss";
import qrcode from "../../assets/images/qrcode.jpg";
import sumup from "../../assets/images/sumup.jpg";

export default function Footer() {
  return (
    <>
      <section className="footerTop">
        <div className="tsAndCs">
          <p className="tsAndCs__title">Terms & Conditions</p>
          <p>Vehicle Block Ford Fiesta - AB12CDE</p>
          <p>Payment to be made within 14 days via the payment link below</p>
        </div>
      </section>

      <div className="borderBlocks">
        <div className="borderBlocks__block1"></div>
        <div className="borderBlocks__block2"></div>
        <div className="borderBlocks__block3"></div>
      </div>

      <section className="footerBottom">
        <div className="footerBottom__qrCodeAndPaymentInfo">
          <div className="footerBottom__qrCodeAndPaymentInfo__qrCode">
            <img src={qrcode} alt="" />
            <p>Pay Online</p>
          </div>

          <div className="footerBottom__qrCodeAndPaymentInfo__paymentInfo">
            <div className="footerBottom__qrCodeAndPaymentInfo__paymentInfo__bankDetails">
              <p>
                <span className="bank">Bank:&nbsp;</span>
                <span>Barclays</span>
                <span className="sortCode">&nbsp;Sort Code:&nbsp;</span>
                <span>12-34-56</span>
                <span className="accountNo"> &nbsp;Account No:&nbsp;</span>
                <span>7654321</span>
              </p>

              <p>
                <span className="accHolder">Account Holder:&nbsp;</span>
                <span>The Car Doctors Ltd.</span>
                <span className="swift">&nbsp;SWIFT:&nbsp;</span>
                <span>ABCDEF11</span>
              </p>

              <p>
                <span className="iban">IBAN:&nbsp;</span>
                <span>GB11 HBUK 1111 1111 1111 11</span>
              </p>
            </div>

            <div className="footerBottom__qrCodeAndPaymentInfo__paymentInfo__linkToPayment">
              <p className="link">
                Go to: https://invoice.sumup.com/s/OEsrHH_Dm
              </p>
              <p>Or Scan the QR Code using your phone's camera</p>
            </div>
          </div>
        </div>

        <div className="footerBottom__invoiceLogo">
          <img src={sumup} alt="" />
          <p>Page 1 of 1 for Invoice #2021-009</p>
        </div>
      </section>
    </>
  );
}
