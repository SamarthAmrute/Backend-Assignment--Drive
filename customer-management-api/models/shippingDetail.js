const mongoose = require('mongoose');

const shippingDetailSchema = new mongoose.Schema({
  address: String,
  city: String,
  pincode: String,
  purchaseOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseOrder' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const ShippingDetail = mongoose.model('ShippingDetail', shippingDetailSchema);

module.exports = ShippingDetail;
