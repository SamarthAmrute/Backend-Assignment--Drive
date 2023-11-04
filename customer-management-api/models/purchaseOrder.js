const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  pricing: Number,
  mrp: Number,
  // Add other fields as needed
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = PurchaseOrder;
