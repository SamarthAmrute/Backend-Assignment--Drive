const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const PurchaseOrder = require('../models/purchaseOrder');
const ShippingDetail = require('../models/shippingDetail');

// Create a new customer
router.post('/customers', async (req, res) => {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
});

// Create a new purchase order
router.post('/purchase-orders', async (req, res) => {
  try {
    const newPurchaseOrder = await PurchaseOrder.create(req.body);
    res.status(201).json(newPurchaseOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create purchase order' });
  }
});

// Create a new shipping detail
router.post('/shipping-details', async (req, res) => {
  try {
    const newShippingDetail = await ShippingDetail.create(req.body);
    res.status(201).json(newShippingDetail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shipping detail' });
  }
});

// Get customers by city filter
router.get('/customers-by-city', async (req, res) => {
    try {
      const { city } = req.query;
      const customers = await Customer.find({ city });
  
      if (customers.length > 0) {
        res.status(200).json(customers);
      } else {
        res.status(404).json({ error: 'No customers found for the specified city' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch customers by city' });
    }
  });
  

// Get customers with all purchase orders
router.get('/customers-with-purchase-orders', async (req, res) => {
    try {
      const customersWithPurchaseOrders = await Customer.aggregate([
        {
          $lookup: {
            from: 'purchaseorders',
            localField: '_id',
            foreignField: 'customer',
            as: 'purchaseOrders',
          },
        },
      ]);
  
      if (customersWithPurchaseOrders.length > 0) {
        res.status(200).json(customersWithPurchaseOrders);
      } else {
        res.status(404).json({ error: 'No customers with purchase orders found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch customers with purchase orders' });
    }
  });
  

module.exports = router;
