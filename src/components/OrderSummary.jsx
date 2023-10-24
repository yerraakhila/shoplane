function OrderSummary() {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="order-summary-gap">
        <h5 className="htag">Subtotal</h5>
        <h5 className="htag">$110</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Shopping Estimate</h5>
        <h5 className="htag">$5</h5>
      </div>
      <div className="order-summary-gap">
        <h5 className="htag">Tax Estimate</h5>
        <h5 className="htag">$10</h5>
      </div>
      <div className="order-summary-gap another">
        <h4 className="h4tag">Order total</h4>
        <h4 className="h4tag">$125</h4>
      </div>
    </div>
  );
}

export default OrderSummary;
