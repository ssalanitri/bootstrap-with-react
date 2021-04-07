import React from 'react'
import {  Card, Badge, Button, Row, Col } from 'react-bootstrap';



const OrderCard = ({data, setOrdered}) => {
    return (
        <>
        <Card className="m-4 border-0 shadow container position-relative">
            <Row className="card-fluid">
            <Card className="h-100 shadow-sm bg-white rounded">
                    <Card.Img  className="images img-fluid" variant="top" src= {data.image} />
                    <Card.Body className="d-flex flex-column" >
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge pill className="mb-2" variant="warning" >
                        ${data.price}
                    </Badge>
                    <Card.Text className="card-text text-desc">{data.desc}</Card.Text>
                        <Button
                            onClick={() => setOrdered()}
                            className="mt-auto font-weigth-bold"
                            variant="success"
                            block
                        >
                            Order Pizza 
                        </Button>
                    </Card.Body> 
                </Card>
            </Row>
        </Card>
        </>
    )
}

export default OrderCard