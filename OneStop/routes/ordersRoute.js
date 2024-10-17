const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Razorpay = require("razorpay");
const Order = require("../models/orderModels")

// Initialize Razorpay instance with your key and secret
const razorpay = new Razorpay({
    key_id: "rzp_test_No5xTEBHl2gTEV",
    key_secret: "YhnSelycmwX3pHqxUGwlyw1n"
});

router.use(express.json());
router.post("/placeorder", async (req, res) => {
    try {
        const { token, subtotal, currentUser, cartItems } = req.body;

        // Extract necessary data from the payload
        const userEmail = currentUser.email;
        const subtotalAmount = parseInt(subtotal.subtotal); // Assuming subtotal is directly a number

        // Calculate the amount to charge in paise based on the subtotal
        const amountInPaise = subtotalAmount * 100;

        // Create an order in Razorpay
        const order = await razorpay.orders.create({
            amount: amountInPaise,
            currency: 'INR',
            receipt: uuidv4(),
            payment_capture: 1 // Automatically capture the payment
        });

        if (order) {
            const neworder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subtotalAmount, // Fixed typo, should be subtotalAmount
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                isDelivered: false, // Assuming initially order is not delivered
                transactionId: order.id // Storing the Razorpay order ID
            });

            // Save the order to the database
            await neworder.save();

            // Construct the response with the order details
            const response = {
                order_id: order.id,
                amount: order.amount,
                currency: order.currency,
                receipt: order.receipt,
                email: userEmail
            };

            // Send the response with the order details
            return res.json(response);
        } else {
            return res.status(400).send("Payment failed");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Something Went Wrong' + error });
    }
});

router.post("/getuserorders", async(req,res)=>{
    const {userid} = req.body

    try{
        const orders = await Order.find({userid :userid})
        res.send(orders)

    }catch(error){
        return res.status(400).json({message : "Something Went Wrong"});

    }
})

module.exports = router;

