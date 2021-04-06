import React from 'react'
import {  Card, Badge, Button } from 'react-bootstrap';


const OrderCard = ({data, setOrdered}) => {
    return (
        <>
            <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Img  className="images" variant="top" src={data.image} />
                <Card.Body className="d-flex flex-column" >
                    <div className = "d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                        <Badge pill className="mb-2" variant="warning" >
                            ${data.price}
                        </Badge>
                    </div>    
                    <Card.Text className="text-secondary">{data.desc}</Card.Text>
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