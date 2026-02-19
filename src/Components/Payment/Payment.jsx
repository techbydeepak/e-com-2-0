import React from "react";

const Payment = () => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "linear-gradient(180deg,#47fdae,#e1ffea22 60%)"
    }}>
      <h1>Dummy Payment Gateway</h1>
      <p>This is a demo payment page.</p>
      <button style={{
        marginTop: "20px",
        padding: "10px 25px",
        border: "none",
        background: "black",
        color: "white",
        cursor: "pointer"
      }}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
