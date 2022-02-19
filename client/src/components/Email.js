import axios from '../config/axios.js';
import React from 'react';

export default class Email extends React.Component {
    constructor() {
        super()
        this.sendWelcomeEmail = this.sendWelcomeEmail.bind(this)
        this.sendOrderPlacedEmail = this.sendOrderPlacedEmail.bind(this)
        this.sendOrderApprovedEmail = this.sendOrderApprovedEmail.bind(this)
        this.sendOrderRejectedEmail = this.sendOrderRejectedEmail.bind(this)
        this.sendOrderCompletedEmail = this.sendOrderCompletedEmail.bind(this)
        this.sendBill = this.sendBill.bind(this)
        this.sendAccountDeletionEmail = this.sendAccountDeletionEmail.bind(this)
        this.sendForgotPasswordEmail = this.sendForgotPasswordEmail.bind(this)
    }

    sendWelcomeEmail() {
        // making api call to /sendEmail/welcome 
        console.log('Inside sendWelcomeEmail function')
        axios.post('/sendEmail/welcome')
    }

    sendOrderPlacedEmail() {
        // making api call to /sendEmail/OrderPlaced 
        console.log('Inside sendOrderPlacedEmail function')
        axios.post('/sendEmail/orderPlaced')
    }

    sendOrderApprovedEmail() {
        // making api call to /sendEmail/orderApproved 
        console.log('Inside sendOrderApprovedEmail function')
        axios.post('/sendEmail/orderApproved')
    }

    sendOrderRejectedEmail() {
        // making api call to /sendEmail/orderRejected 
        console.log('Inside sendOrderRejectedEmail function')
        axios.post('/sendEmail/orderRejected')
    }

    sendOrderCompletedEmail() {
        // making api call to /sendEmail/orderCompleted 
        console.log('Inside sendOrderCompletedEmail function')
        axios.post('/sendEmail/orderCompleted')
    }

    sendBill() {
        // making api call to /sendEmail/bill 
        console.log('Inside sendBill function')
        axios.post('/sendEmail/bill')
    }

    sendAccountDeletionEmail() {
        // making api call to /sendEmail/accountDeletion 
        console.log('Inside sendAccountDeletionEmail function')
        axios.post('/sendEmail/accountDeletion')
    }

    sendForgotPasswordEmail() {
        // making api call to /sendEmail/forgotPassword 
        console.log('Inside sendForgotPasswordEmail function')
        axios.post('/sendEmail/forgotPassword')
    }

    render() {
        return (
            <div>
                <script type="text/javascript" src="//www.turnjs.com/lib/turn.min.js "></script>
                <h1>Main component</h1>
                <button onClick={this.sendWelcomeEmail}>Welcome Email</button>
                <button onClick={this.sendOrderPlacedEmail}>Order placed Email</button>
                <button onClick={this.sendOrderApprovedEmail}>Order Approved Email</button>
                <button onClick={this.sendOrderRejectedEmail}>Order Rejected Email</button>
                <button onClick={this.sendOrderCompletedEmail}>Order Completed Email</button>
                <button onClick={this.sendBill}>Bill</button>
                <button onClick={this.sendAccountDeletionEmail}>Account Deletion Email</button>
                <button onClick={this.sendForgotPasswordEmail}>Forgot Password Email</button>
            </div>
        )
    }

}