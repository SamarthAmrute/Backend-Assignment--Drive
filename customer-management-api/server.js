const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Customer, PurchaseOrder, ShippingDetails } = require('./models');

const app = express();
app.use(bodyParser.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/customer_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create API to add customers
app.post('/customers', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create API for Purchase Order
app.post('/purchase-orders', async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.create(req.body);
    res.status(201).json(purchaseOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create API for Shipping Details
app.post('/shipping-details', async (req, res) => {
  try {
    const shippingDetails = await ShippingDetails.create(req.body);
    res.status(201).json(shippingDetails);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Other API endpoints (e.g., getting customers with shipment, purchase orders, etc.)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
