

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

import {Container, Row, Col} from 'react-bootstrap';
import OrderConfirmation from './components/OrderConfirmation'
import OrderCard from './components/OrderCard'
import pizzas from './data';


const App = () => {

  const [ordered, setOrdered] = useState(false);

  const displayConfirmation = () => {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);

  }

  return (
    <>
      <Container>
        {ordered && <OrderConfirmation toggle={setOrdered} />}
        <Row>
          {pizzas.map(data => (
            <Col xs={3} className="mb-5" key={`${data.id}`}>
              <OrderCard data={data} setOrdered={displayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default App