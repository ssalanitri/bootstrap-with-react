

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.scss';
import './assets/css/card.scss';
import './assets/css/header.scss';

import {Container, Row, Col } from 'react-bootstrap';
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
     <Container className="bd-highlight">
       <p className="text-center title"> Pizzas R.E.A.C.T </p>
       <p className="text-center subtitle">Las mejoras pizzas</p>
     </Container>
     
     
    <Container className="d-flex flex-wrap bd-highlight">
      <Row>
        {ordered && <OrderConfirmation toggle={setOrdered} />}
          {pizzas.map(data => (
              <Col className="mb-5 bd-highlight" key={`${data.id}`}>
                <OrderCard data={data} setOrdered={displayConfirmation} />
              </Col>
         ))}
      </Row>
    </Container>
    </>
  )
}

export default App