import React from 'react'
import {Toast, ToggleButton} from 'react-bootstrap';


const OrderConfirmation = ({toggle}) => {
    return (
        <>
            <Toast onClose={() => toggle(false)} >
                <Toast.Header>
                    <strong className="mr-auto">Your order is in the Oven!!</strong>
                    <small>just now</small>
                </Toast.Header>    
                <Toast.Body>
                    In brief you enjoy our delicious pizza!! 
                </Toast.Body>           
            </Toast>
        </>
    )
}

export default OrderConfirmation