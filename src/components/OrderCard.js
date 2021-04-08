import React from 'react'
import {  Card, Badge, Button, Row, Col } from 'react-bootstrap';



const OrderCard = ({data, setOrdered}) => {
    return (
        <>
            <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Img  className="images img-fluid" variant="top" src= {data.image} alt={data.name} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-0 text-name">{data.name}</Card.Title>
                        <Badge pill className="mb-2" variant="warning" >
                            ${data.price}
                        </Badge>
                    <Card.Text className="text-desc">{data.desc}</Card.Text>
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
        </>
    )
}

export default OrderCard