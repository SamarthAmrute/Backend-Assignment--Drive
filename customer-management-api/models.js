const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  mobileNumber: String,
  city: String,
});

const purchaseOrderSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  pricing: Number,
  mrp: Number,
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const shippingDetailsSchema = new mongoose.Schema({
  address: String,
  city: String,
  pincode: String,
  purchaseOrderId: { type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseOrder' },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const Customer = mongoose.model('Customer', customerSchema);
const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);
const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);

module.exports = { Customer, PurchaseOrder, ShippingDetails };
