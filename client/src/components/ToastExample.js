import React from 'react'
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap'


const Toast1 = (props) => {
    const {
        isOpen,
        closeModal
    } = props;
    return (
        <div>
            <Toast isOpen={isOpen} className="p-3 bg-warning my-3 rounded">
                <ToastHeader className="bg-warning">
                    <span style={{ "color": "green" }}>Order Status Tip</span>
                    <Button className="bg-danger" onClick={closeModal}>X</Button>
                </ToastHeader>
                <ToastBody className="bg-warning rounded">
                    To view your order, Go to<br />
                    Profile Icon -&gt; My Orders
                </ToastBody>
            </Toast>
        </div>
    );
}

export default Toast1;