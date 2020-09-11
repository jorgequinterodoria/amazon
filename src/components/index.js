const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51HPvSlAa3FDknegJukbaakIWGjyMjtCTQr0Rw9ZZuH795XDT7Rj4Y3zrSlAg7dQyZYJqFZFDswjEwLjV7GwsLr0100AF1AfNVb')

// API

//App Config

const app = express()

//Middlewares

app.use(cors({ origin: true }))
app.use(express.json())

// API Routes
app.get('/', (request, response) => response.status(200).send('Hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment request recieved', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// LIsten Commands
exports.api = functions.https.onRequest(app)
