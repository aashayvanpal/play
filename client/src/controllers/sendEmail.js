var nodemailer = require('nodemailer')
const { getMaxListeners } = require('../../../models/blogPost')

var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
})


// Welcome email
module.exports.welcome = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Account created at Aaswad Caterers!',
        html: `<h1>Welcome to Aaswad Caterers!</h1>
        <h1>Your account has been created successfully!</h1>
        `
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('you have error')
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}

// Order has been placed
module.exports.orderPlaced = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Order has been placed successfully',
        html: `<h1>Your order has been placed successfully</h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}

// 3.Order has been approved and billing estimation
module.exports.orderApproved = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Order has been Approved',
        html: `<h1>Your order has been Approved </h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}

// 4.Order has been rejected
module.exports.orderRejected = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Order has been rejected',
        html: `<h1>Sorry, your order has been Rejected </h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}

// 5.Order has been Completed 
module.exports.orderCompleted = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Order completed successfully',
        html: `<h1>Your order has been Completed </h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}

// 6.Bill 
module.exports.bill = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Order bill',
        html: `<h1>Your Bill </h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}

// 7.Account deletion
module.exports.deleteAccount = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'Account deletion',
        html: `<h1>Your Account has been deleted </h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}
// 8.Forgot password
module.exports.forgotPassword = (req, res) => {

    var mailOptions = {
        from: 'aashay.vanpal@gmail.com',
        to: ['aashay.vanpal@gmail.com',],
        subject: 'password recovery',
        html: `<h1>Forgot password : reset link </h1>`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent', info.response)
        }
    })
}