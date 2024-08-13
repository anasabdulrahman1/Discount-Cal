import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './App.css'

function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    setFinalPrice((originalPrice - discountAmount).toFixed(2));
  };

  const resetCalculator = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setFinalPrice(null);
  };

  return (
    <>
    <div className='discount-calculator'>
      <div className="wrapper-container ">
      <h2>Discount Calculator</h2>
      <Form>
        <Form.Group controlId="originalPrice">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="discountPercentage" className="mt-3">
          <Form.Label>Discount %</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter % (percentage)"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
        </Form.Group>

        <div className="buttons">
          <Button variant="btn btn-success" onClick={calculateDiscount}>Calculate</Button>
          <Button variant="btn btn-outline-danger" onClick={resetCalculator}>Reset</Button>
        </div>
      </Form>

      {finalPrice && (
        <Row className="mt-5">
          <Col>
            <h4 className="final-price">After Discount Final Amount: &#8377;{finalPrice}</h4>
          </Col>
        </Row>
      )}
      </div>
      </div>
    
  </>
  );
}

export default DiscountCalculator;
