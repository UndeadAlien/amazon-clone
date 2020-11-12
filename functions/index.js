const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { RepeatOneSharp } = require('@material-ui/icons');
const stripe = require('stripe')('sk_test_51HmQk4AamvPqt3kCOJU6aNSzLVUn5F6KS91sJUfcmFe0hQxv6izzEaaqthvMhXc20zSVwg5J2U4GTuqzXWAiowZC00BHJIVDqW')

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example EndPoint
// http://localhost:5001/clone-9b887/us-central1/api